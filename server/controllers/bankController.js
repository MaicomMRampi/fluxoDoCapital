const db = require('../config/db');



const createBank = async (req, res) => {
    // Lógica para criar banco
    try {
        const dados = req.body
        const nomeUppercase = dados.values.instituicao.toUpperCase().trim();
        const queryVerifica = `
    SELECT * FROM Banco WHERE nomeBanco = ? AND idUser = ?
`;
        const verificaNome = await db.query(queryVerifica, [nomeUppercase, dados.token]);
        if (verificaNome.length > 0 && verificaNome[0].idUser === dados.token) {
            return res.status(400).json({ message: 'Banco Já Cadastrado ' })
        }

        const query = `
            INSERT INTO Banco (nomeBanco, idUser)
            VALUES (?, ?)
        `;
        const valores = [
            nomeUppercase,
            parseInt(dados.token)
        ];
        await db.query(query, valores);
        res.status(200).json({ message: 'Banco Cadastrado ' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Erro ao Cadastrar' })
    }
};

const getBanks = async (req, res) => {
    // Lógica para buscar bancos
    try {
        const data = req.query.id

        const query = `
            SELECT * FROM Banco WHERE idUser = ?
        `;
        const [rows] = await db.query(query, [data]);

        console.log("🚀 ~ getBanks ~ rows", rows)
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Erro ao Buscar' })
    }
};

const deleteBank = async (req, res) => {
    // Lógica para deletar banco


    // try {
    //     const deletaBanco = await prisma.banco.delete({
    //         where: {
    //             idUser: parseInt(data.id),
    //             id: parseInt(data.idBanco)

    //         }
    //     })
    //     res.status(200).json({ message: 'Banco Deletado ' })
    // } catch (error) {
    //     res.status(400).json({ message: 'Erro ao Cadastrar' })
    // }
    try {
        const data = req.body

        const query = `
        DELETE FROM Banco WHERE id = ? AND idUser = ?
    `;
        const valores = [
            parseInt(data.idBanco),
            parseInt(data.id)
        ];
        await db.query(query, valores);
        res.status(200).json({ message: 'Banco Deletado ' })
    } catch (error) {

    }
};

module.exports = {
    createBank,
    getBanks,
    deleteBank,
};
