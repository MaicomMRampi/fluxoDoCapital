
const pool = require('../config/db'); // Ajuste o caminho conforme necessário
const { crypto } = require('../utils/password')
const { converteString } = require('../utils/converteString')


const createUser = async (req, res) => {
    console.log("chegou no controleld")
    const { nome, cpf, email, senha } = req.body;

    try {
        const avaliacaoGratuita = new Date();
        avaliacaoGratuita.setDate(avaliacaoGratuita.getDate() + 15);
        const dataCadastro = new Date();

        // Formatando nome e email
        const nomeFormatado = nome.toUpperCase().trim();
        const emailFormatado = email.trim();
        const senhaCripto = await crypto(senha);

        // Obter uma conexão do pool
        const connection = await pool.getConnection();

        // Verificar se o e-mail já está cadastrado
        const [emailExists] = await connection.execute('SELECT * FROM Usuario WHERE email = ?', [emailFormatado]);
        if (emailExists.length > 0) {
            connection.release();
            return res.status(401).json({ message: 'E-mail Já Cadastrado' });
        }

        // Verificar se o CPF já está cadastrado
        const [cpfExists] = await connection.execute('SELECT * FROM Usuario WHERE cpf = ?', [cpf]);
        if (cpfExists.length > 0) {
            connection.release();
            return res.status(401).json({ message: 'CPF Já Cadastrado' });
        }

        // Inserir novo usuário na tabela
        const [result] = await connection.execute(
            'INSERT INTO Usuario (nome, cpf, email, senha, openModal, dataExpiracao, datacadastro, statusFinanceiro) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
                nomeFormatado,
                cpf,
                emailFormatado,
                senhaCripto.toString('hex'),
                1, // openModal
                avaliacaoGratuita,
                dataCadastro,
                1, // statusFinanceiro
            ]
        );

        // Inserir dados de pagamento
        await connection.execute(
            'INSERT INTO UsuarioPagamento (idUser, metodoPagamento, dataExpiracao, valorPago, status) VALUES (?, ?, ?, ?, ?)',
            [
                result.insertId, // idUser
                'Pix',
                avaliacaoGratuita,
                10, // valorPago
                0, // status
            ]
        );

        res.status(200).json({ message: 'Usuário Salvo com Sucesso!' });

        // Liberar a conexão de volta ao pool
        connection.release();
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ erro: 'Erro interno ao criar usuário' });
    }
};
const updateUser = async (req, res) => {
    try {
        const dados = req.body;

        // Obter uma conexão do pool
        const connection = await pool.getConnection();

        // Atualizar os dados do usuário
        const [response] = await connection.execute(
            'UPDATE Usuario SET nome = ?, email = ?, valorOrcamentoMensal = ? WHERE id = ?',
            [
                dados.values.nome,
                dados.values.email,
                converteString(dados.values.valorOrcamentoMensal),
                parseInt(dados.id)
            ]
        );

        // Liberar a conexão de volta ao pool
        connection.release();

        // Verificar se a atualização foi bem-sucedida
        if (response.affectedRows > 0) {
            res.status(200).json({ message: 'Atualizado com sucesso!', response });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        res.status(500).json({ message: 'Erro ao processar a atualização do usuário.' });
    }
};

const uploadImage = async (req, res) => {
    // Lógica para upload de imagem
};

const closeModal = async (req, res) => {
    // Lógica para fechar modal
};

module.exports = {
    createUser,
    updateUser,
    uploadImage,
    closeModal,
};
