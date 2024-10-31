const db = require('../config/db');

const criarNomeAcao = async (req, res) => {
    try {
        const dados = req.body;
        const nomeAcao = dados.values.acao.toUpperCase().trim();
        const idUser = parseInt(dados.token);

        // Verifica se o nome da ação já está cadastrado
        const [buscaNome] = await db.query(
            'SELECT * FROM Nomeacao WHERE nomeAcao = ? AND idUser = ?',
            [nomeAcao, idUser]
        );

        if (buscaNome.length > 0) {
            return res.status(400).json({ message: 'Nome Já Cadastrado' });
        }

        // Se não existir, insere o novo registro
        await db.query(
            'INSERT INTO Nomeacao (nomeAcao, idUser) VALUES (?, ?)',
            [nomeAcao, idUser]
        );

        res.status(200).json({ message: 'Nome Cadastrado com Sucesso' });
    } catch (error) {
        console.logd("Erro ao salvar nome:", error);
        res.status(500).json({ message: 'Erro ao Cadastrar Nome' });
    }

}

const buscaNomeAcao = async (req, res) => {
    try {
        const id = req.query.id
        const query = `
            SELECT * FROM Nomeacao
            WHERE idUser = ?
        `;
        const buscaNome = await db.query(query, [id]);
        const result = buscaNome[0]
        res.status(200).json(result);
    } catch (error) {
        console.log("Erro ao buscar nomes:", error);
        res.status(500).json({ message: 'Erro ao Buscar Nomes' });
    }
}

const deletarNomeAcao = async (req, res) => {
    const data = req.body
    console.log("🚀 ~ deletarNomeAcao ~ data", data)
    try {
        const query = `
            DELETE FROM Nomeacao
            WHERE id = ? AND idUser = ?
        `;
        const result = await db.query(query, [data.idBanco, parseInt(data.id)]);
        res.status(200).json({ message: 'Nome Deletado com Sucesso' });
    } catch (error) {
        console.log("Erro ao deletar nome:", error);
        res.status(500).json({ message: 'Erro ao Deletar Nome' });
    }
}

module.exports = {
    criarNomeAcao,
    buscaNomeAcao,
    deletarNomeAcao
}