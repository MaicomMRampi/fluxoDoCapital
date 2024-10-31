const db = require('../config/db');


const createFundName = async (req, res) => {
    // Lógica para criar nome de fundo
    try {
        const dados = req.body;
        const nome = dados.nomefundo.toUpperCase().trim();
        const idUser = parseInt(dados.id); // Obtendo o ID do usuário da requisição

        // Verifica se já existe um registro com o mesmo nome e idUser
        const [buscaNome] = await db.query(
            'SELECT * FROM NomeFundoImobiliario WHERE nomeFundo = ? AND idUser = ? LIMIT 1',
            [nome, idUser]
        );

        if (buscaNome.length > 0) {
            return res.status(400).json({ message: 'Nome Já Cadastrado' });
        }

        // Se não existir, insere o novo registro
        const queryInsert = `
            INSERT INTO NomeFundoImobiliario (nomeFundo, idUser)
            VALUES (?, ?)
        `;
        await db.query(queryInsert, [nome, idUser]);

        res.status(200).json({ message: 'Nome Cadastrado com Sucesso' });
    } catch (error) {
        console.error("Erro ao salvar nome:", error);
        res.status(500).json({ message: 'Erro ao Cadastrar Nome' });
    }
};

const getFundNames = async (req, res) => {
    try {
        const id = req.query.id
        const query = `
            SELECT * FROM NomeFundoImobiliario
            WHERE idUser = ?
        `;
        const buscaNome = await db.query(query, [id]);
        const result = buscaNome[0]
        console.log("🚀 ~ getFundNames ~ buscaNome", buscaNome)
        res.status(200).json(result);
    } catch (error) {

    }
}

const deleteFundName = async (req, res) => {
    const data = req.body;
    console.log("🚀 ~ deleteFundName ~ data", data)

    try {
        const query = `
            DELETE FROM NomeFundoImobiliario
            WHERE id = ${data.idBanco} AND idUser = ${data.id}
        `;
        const result = await db.query(query, [data.id]);
        console.log("🚀 ~ deleteFundName ~ result", result)

        res.status(200).json({ message: 'Nome Deletado com Sucesso' });
    } catch (error) {
        console.log("Erro ao deletar nome:", error);
        res.status(500).json({ message: 'Erro ao Deletar Nome' });
    }
}
module.exports = {
    createFundName,
    getFundNames,
    deleteFundName
}