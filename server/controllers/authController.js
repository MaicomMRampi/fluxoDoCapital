const pool = require('../config/db'); // Ajuste o caminho conforme necessário
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { crypto } = require('../utils/password')

const login = async (req, res) => {
    const data = req.body.values; // Acessando os dados do corpo da requisição
    console.log("🚀 ~ login ~ data", data)

    try {
        // Obter uma conexão do pool
        const connection = await pool.getConnection();

        // Buscar usuário pelo CPF
        const [rows] = await connection.execute('SELECT * FROM Usuario WHERE cpf = ?', [data.cpf]);

        // Verificar se o usuário existe
        if (rows.length === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        const user = rows[0]; // Pegando o primeiro usuário encontrado

        // Comparar a senha fornecida com a senha armazenada
        const comparaSenha = await bcrypt.compare(data.senha, user.senha);

        // Verificar se a senha está correta
        if (!comparaSenha) {
            return res.status(401).json({ erro: 'Senha incorreta' });
        }

        // Gerar o token JWT
        const token = jwt.sign(
            { userId: user }, // Apenas incluir o ID do usuário no token
            'secreto',           // Chave secreta para assinar o token (mantenha essa chave segura)
            { expiresIn: '1h' }  // Definindo tempo de expiração do token
        );

        // Enviar o token JWT como parte da resposta
        res.status(200).json({
            mensagem: 'Login bem-sucedido',
            token: token,
            usuario: {
                nome: user.nome,
                email: user.email,
                id: user.id,
                openModal: user.openModal,
            },
        });

        // Liberar a conexão de volta ao pool
        connection.release();
    } catch (error) {
        console.error('Erro ao processar o login:', error);
        res.status(500).json({ erro: 'Erro interno ao processar o login' });
    }
};
const forgotPassword = async (req, res) => {
    try {
        const { cpf } = req.body; // Extrair CPF do corpo da requisição

        // Obter uma conexão do pool
        const connection = await pool.getConnection();

        // Buscar o usuário pelo CPF
        const [buscaUsuario] = await connection.execute('SELECT * FROM Usuario WHERE cpf = ?', [cpf]);
        if (buscaUsuario.length === 0) {
            connection.release();
            return res.status(400).json({ message: 'CPF Inválido' });
        }

        // Gerar uma nova senha aleatória
        const senhaSemCripto = Math.floor(1000 + Math.random() * 9000);
        const senhaCriptografada = await crypto(senhaSemCripto.toString());

        // Atualizar a senha do usuário no banco de dados
        await connection.execute(
            'UPDATE Usuario SET senha = ? WHERE id = ?',
            [senhaCriptografada.toString('hex'), buscaUsuario[0].id]
        );

        // Enviar a nova senha no corpo da resposta
        res.json({
            email: buscaUsuario[0].email,
            nome: buscaUsuario[0].nome,
            senhaNova: senhaSemCripto,
        });

        // Liberar a conexão de volta ao pool
        connection.release();
    } catch (error) {
        console.error("Erro ao processar a alteração de senha:", error);
        res.status(500).json({ message: 'Erro ao processar a alteração de senha' });
    }
};

module.exports = {
    login,
    forgotPassword,
    // Outros controllers se necessário
};