const db = require("../config/db"); // Importando a conexão com o banco de dados
const { converteString } = require("../utils/converteString");
const formatDate = require('../utils/convertData');

const novaDespesa = async (req, res) => {
    const teste = req.body
    try {
        const idUser = req.body.id;

        // Desestruturação dos valores do corpo da requisição
        const {
            local,
            valorgasto,
            formadepagamento,
            responsavel,
            categoria,
            pagante,
            observacao,
            mescorrespondente,
            dataaquisicao
        } = req.body.values;

        // Conversão do valor gasto para número
        const valorNumber = converteString(valorgasto);

        // Formatação dos campos responsavel e pagante
        const nomeUppercase = responsavel ? responsavel.toUpperCase().trim() : null;
        const paganteUppercase = pagante ? pagante.toUpperCase().trim() : null;

        // Formatação do campo dataAquisicao para o padrão MySQL
        const dataAquisicaoFormatado = formatDate(dataaquisicao);

        // Inserindo a nova despesa no banco de dados
        const [result] = await db.execute(
            `INSERT INTO Despesas (idUser, local, valorGasto, formaDePagamentoId, responsavel, categoriaId, pagante, observacao, mesCorrespondente, dataAquisicao)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                parseInt(idUser),
                local || null,
                valorNumber,
                parseInt(formadepagamento),
                nomeUppercase,
                parseInt(categoria),
                paganteUppercase || null,
                observacao || null,
                mescorrespondente || null,
                dataAquisicaoFormatado
            ]
        );

        // Resposta de sucesso
        res.status(200).json({ message: 'Despesa salva com sucesso', id: result.insertId });
    } catch (error) {
        console.error('Erro ao processar a despesa:', error);
        res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }


};

const buscaDespesa = async (req, res) => {
    const anoAtual = new Date().getFullYear().toString();
    const periodoInicial = `${anoAtual}-01`;
    const periodoFinal = `${anoAtual}-12`;

    try {
        const idUser = parseInt(req.query.email);

        // Consulta SQL para buscar despesas com junção de tabelas
        const buscaDespesa = await db.execute(
            `SELECT *
             FROM Despesas
             LEFT JOIN Categoria ON Despesas.categoriaId = Categoria.id
             LEFT JOIN FormaPagamento ON Despesas.formaDePagamentoId = FormaPagamento.id
             WHERE Despesas.idUser = ? AND Despesas.mesCorrespondente BETWEEN ? AND ?`,
            [idUser, periodoInicial, periodoFinal]
        );

        res.json(buscaDespesa[0]);
    } catch (error) {
        console.error("Erro ao buscar despesas:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }

};

const buscaDespesaMesAtual = async (req, res) => {
    const mesAtual = new Date();
    let mes = mesAtual.getMonth() + 1;
    const ano = mesAtual.getFullYear();
    mes = mes < 10 ? `0${mes}` : mes; // Ajuste para ter sempre dois dígitos no mês
    const iniciaPadraoData = `${ano}-${mes}`;

    try {
        // Substitua pela lógica correta para capturar o email ou idUser da requisição
        const idUser = parseInt(req.query.email);

        // Consulta SQL usando a conexão MySQL com `mysql2`
        const [buscaDespesa] = await db.execute(
            `SELECT *
             FROM Despesas
             LEFT JOIN Categoria ON Despesas.categoriaId = Categoria.id
             LEFT JOIN FormaPagamento ON Despesas.formaDePagamentoId = FormaPagamento.id
             WHERE Despesas.mesCorrespondente = ? AND Despesas.idUser = ?`,
            [iniciaPadraoData, idUser]
        );
        console.log("🚀 ~ buscaDespesaMesAtual ~ buscaDespesa", buscaDespesa)

        // Retorna o resultado da consulta
        res.json(buscaDespesa);
    } catch (error) {
        console.error("Erro ao buscar despesas:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};

const buscaDespesaData = async (req, res) => {
    console.log("🚀 ~ buscaDespesaData ~ req.body")
    try {
        const { data } = req.body;
        const idUser = req.body.emailUser;

        // Consulta SQL para buscar despesas com mesCorrespondente e idUser específicos
        const [buscaDespesa] = await db.execute(
            `SELECT 
                *, 
                c.nomeCategoria,
                f.nomeFormaPagamento
                FROM Despesas d
             LEFT JOIN Categoria c ON d.categoriaId = c.id 
             LEFT JOIN FormaPagamento f ON d.formaDePagamentoId = f.id 
             WHERE d.mesCorrespondente = ? AND d.idUser = ?`,
            [data, idUser]
        );

        res.json(buscaDespesa);
    } catch (error) {
        console.log('Erro ao buscar despesas por data:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

// const deletaDespesa = async (req, res) => {
//     try {
//         const resultado = await expenseController.deletaDespesa(req.body.id);
//         res.status(200).json({ message: 'Despesa deletada com sucesso', resultado });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const atualizarPagante = async (req, res) => {
//     try {
//         const despesaAtualizada = await expenseController.atualizarPagante(req.body.id, req.body.pagante);
//         res.status(200).json(despesaAtualizada);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

module.exports = {
    novaDespesa,
    buscaDespesa,
    buscaDespesaMesAtual,
    buscaDespesaData
    // deletaDespesa,
    // atualizarPagante,
}