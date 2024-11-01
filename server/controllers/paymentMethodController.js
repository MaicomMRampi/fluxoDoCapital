const db = require('../config/db');

const createPaymentMethod = async (req, res) => {
    // Lógica para criar uma forma de pagamento

    try {
        const dados = req.body; // Captura o corpo da requisição

        // Formata o nome da forma de pagamento para maiúsculas e remove espaços em branco
        const nomeUppercase = dados.nome.formapagamento.toUpperCase().trim();

        // Verifica se a forma de pagamento já existe
        const [verificaNome] = await db.execute(
            `SELECT * FROM FormaPagamento WHERE nomeFormaPagamento = ? AND idUser = ?`,
            [nomeUppercase, parseInt(dados.idUser)]
        );

        if (verificaNome.length > 0) {
            return res.status(400).json({ message: 'Categoria já cadastrada' });
        }

        // Se a forma de pagamento não existir, cria uma nova e salva
        const [novaForma] = await db.execute(
            `INSERT INTO FormaPagamento (nomeFormaPagamento, idUser) VALUES (?, ?)`,
            [nomeUppercase, parseInt(dados.idUser)]
        );

        // Resposta de sucesso
        res.status(200).json({ message: 'Forma de pagamento cadastrada com sucesso', id: novaForma.insertId }); // Retornando o ID da nova forma
    } catch (error) {
        console.log('Erro ao processar a forma de pagamento:', error);
        res.status(500).json({ message: 'Erro interno do servidor', error: error.message }); // Retornando mensagem de erro
    }
};
const getPaymentMethods = async (req, res) => {
    try {
        const idUser = req.query.idUser
        const query = `SELECT * FROM FormaPagamento WHERE idUser = ${idUser}`;
        const [rows] = await db.execute(query);
        res.json(rows);
    } catch (error) {

    }
}
const deletePaymentMethod = async (req, res) => {
    try {
        const data = req.body; // Captura o corpo da requisição

        // Executa a deleção da forma de pagamento no banco de dados
        const [deletaBanco] = await db.execute(
            `DELETE FROM FormaPagamento WHERE idUser = ? AND id = ?`,
            [parseInt(data.id), parseInt(data.idBanco)]
        );

        // Verifica se alguma linha foi afetada
        if (deletaBanco.affectedRows > 0) {
            return res.status(200).json({ message: 'Forma de Pagamento deletada com sucesso' });
        } else {
            return res.status(404).json({ message: 'Forma de Pagamento não encontrada' }); // Retorna 404 se nada foi deletado
        }
    } catch (error) {
        console.error('Erro ao deletar forma de pagamento:', error);
        res.status(500).json({ message: 'Erro ao deletar forma de pagamento', error: error.message }); // Retorna mensagem de erro
    }
}
module.exports = {
    createPaymentMethod,
    getPaymentMethods,
    deletePaymentMethod
}