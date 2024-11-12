const db = require('../config/db');
const ControleMensal = async (req, res) => {
    try {
        const dados = req.body;
        const idUser = parseInt(dados.id);
        const mesCorrespondente = dados.data;

        // Consulta para buscar contas do usuário
        const [buscaContas] = await db.query(
            'SELECT valor FROM Contas WHERE idUser = ? AND mesCorrespondente = ?',
            [idUser, mesCorrespondente]
        );

        // Consulta para buscar despesas do usuário
        const [buscaDespesas] = await db.query(
            'SELECT valorGasto FROM Despesas WHERE idUser = ? AND mesCorrespondente = ?',
            [idUser, mesCorrespondente]
        );

        // Consulta para buscar orçamento mensal do usuário
        const [buscaControleUsuario] = await db.query(
            'SELECT valorOrcamentoMensal FROM Usuario WHERE id = ?',
            [idUser]
        );

        // Função de soma
        const sumValues = (array, key) => array.reduce((acc, item) => acc + item[key], 0);

        const totalDespesa = sumValues(buscaDespesas, 'valorGasto');
        const totalContas = sumValues(buscaContas, 'valor');
        const orcamentoUsuario = buscaControleUsuario[0]?.valorOrcamentoMensal || 0;

        const porcentagem = orcamentoUsuario ? Math.round(((totalDespesa + totalContas) / orcamentoUsuario) * 100) : 0;
        const total = totalDespesa + totalContas;

        res.json({
            porcentagem,
            total,
            orcamentoUsuario
        });

    } catch (error) {
        console.error("Erro ao buscar dados financeiros:", error);
        res.status(500).json({ message: 'Erro ao buscar despesas' });
    }
}


module.exports = {
    ControleMensal
}