const db = require('../config/db');


const createExpenseType = async (req, res) => {
    // Lógica para criar despesa
    try {
        const value = req.body;

        // Query SQL para inserir um novo tipo de despesa
        const query = `
            INSERT INTO TipoDespesa (nomeDespesa, idUser)
            VALUES (?, ?)
        `;

        // Valores para os campos nomeDespesa e idUser
        const valores = [
            value.value.toUpperCase(),
            parseInt(value.id)
        ];

        // Executa a query usando o driver MySQL configurado (db)
        await db.query(query, valores);

        return res.status(200).json({ message: 'Tipo de Despesa Cadastrado com Sucesso' });
    } catch (error) {
        console.error('Erro ao Cadastrar Tipo de Despesa:', error);
        return res.status(500).json({ message: 'Erro ao Cadastrar Tipo de Despesa' });
    }
};

const getExpenseTypes = async (req, res) => {
    // Lógica para buscar despesas

    try {
        const idUser = req.query.id;

        // Query SQL para buscar todos os tipos de despesa do usuário com o id fornecido
        const query = `
            SELECT * FROM TipoDespesa 
            WHERE idUser = ?
        `;

        // Executa a query passando o id do usuário como parâmetro
        const [result] = await db.query(query, [parseInt(idUser)]);

        res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao buscar Tipo de Despesa:", error);
        res.status(500).json({ message: 'Erro ao buscar tipo de despesa.' });
    }
};

const deleteExpenseType = async (req, res) => {
    // Lógica para deletar despesa
    try {
        const data = req.body;

        const query = `
            DELETE FROM TipoDespesa
            WHERE id = ?
        `;

        await db.query(query, [parseInt(data.idBanco)]);
        res.status(200).json({ message: 'Tipo de Despesa Deletado com Sucesso' });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar tipo de despesa.' });
    }
};

module.exports = {
    createExpenseType,
    getExpenseTypes,
    deleteExpenseType
};
