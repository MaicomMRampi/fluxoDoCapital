const pool = require('../config/db'); // Ajuste o caminho conforme necessário

const createUser = async (req, res) => {
    try {
        const { nome, cpf, email, senha } = req.body;

        const sql = 'INSERT INTO Usuario (nome, cpf, email, senha) VALUES (?, ?, ?, ?)';
        const [result] = await pool.query(sql, [nome, cpf, email, senha]);

        res.status(200).json({ message: 'Usuário inserido com sucesso', result });
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
        res.status(500).json({ error: 'Erro ao inserir usuário' });
    }
};

module.exports = { createUser };
