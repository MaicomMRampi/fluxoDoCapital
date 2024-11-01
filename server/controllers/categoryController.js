const db = require('../config/db');

const createCategory = async (req, res) => {
    console.log("Entrou no createCategory");
    try {
        const nome = req.body; // Captura o corpo da requisição
        const nomeUppercase = nome.categoria.categoria.toUpperCase().trim(); // Formata o nome da categoria

        // Verifica se a categoria já existe
        const [verificaNome] = await db.execute(
            `SELECT * FROM Categoria WHERE nomeCategoria = ? AND idUser = ?`,
            [nomeUppercase, parseInt(nome.idUser)]
        );

        if (verificaNome.length > 0) {
            return res.status(400).json({ message: 'Categoria já cadastrada' });
        }

        // Insere nova categoria no banco de dados
        const [novaCategoria] = await db.execute(
            `INSERT INTO Categoria (nomeCategoria, idUser) VALUES (?, ?)`,
            [nomeUppercase, parseInt(nome.idUser)]
        );

        // Resposta de sucesso
        res.status(200).json({ message: 'Categoria cadastrada com sucesso', id: novaCategoria.insertId }); // Retornando o ID da nova categoria
    } catch (error) {
        console.log('Erro ao processar a nova categoria:', error);
        res.status(500).json({ message: 'Erro interno do servidor', error: error.message }); // Retornando mensagem de erro
    }
}
const getCategories = async (req, res) => {
    try {
        const id = req.query.idUser
        const query = `SELECT * FROM Categoria WHERE idUser = ?`
        const [result] = await db.execute(query, [id])
        res.status(200).json(result)
    } catch (error) {
        console.log("Erro ao buscar categorias:", error);
        res.status(500).json({ message: 'Erro ao buscar categorias.' });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const data = req.body; // Captura o corpo da requisição

        // Executa a deleção da categoria no banco de dados
        const [deletaBanco] = await db.execute(
            `DELETE FROM Categoria WHERE idUser = ? AND id = ?`,
            [parseInt(data.id), parseInt(data.idBanco)]
        );

        // Verifica se alguma linha foi afetada
        if (deletaBanco.affectedRows > 0) {
            return res.status(200).json({ message: 'Banco deletado com sucesso' });
        } else {
            return res.status(404).json({ message: 'Banco não encontrado' }); // Retorna 404 se nada foi deletado
        }
    } catch (error) {
        console.error('Erro ao deletar banco:', error);
        res.status(500).json({ message: 'Erro ao deletar banco', error: error.message }); // Retorna mensagem de erro
    }
}
module.exports = {
    createCategory,
    getCategories,
    deleteCategory
}