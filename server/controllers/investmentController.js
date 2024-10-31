// investmentController.js
const db = require('../config/db');
const { converteString } = require('../utils/converteString');
const formatDate = require('../utils/convertData')
const criarInvestimento = async (req, res) => {
    // Lógica para criar um novo investimento

    const dados = req.body;
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth() + 1;
    const dia = dataAtual.getDate();
    const dataAtualFormatada = `${ano}/${mes < 10 ? `0${mes}` : mes}/${dia < 10 ? `0${dia}` : dia}`;

    // Constrói a consulta SQL de acordo com o tipo de investimento
    let query = '';
    let params = [];

    switch (dados.dados.tipoInvestimento) {
        case 'acao':
            try {
                const precoCompraFormatado = converteString(dados.dados.precoCompra);
                query = `
                    INSERT INTO Investimentos (nome, instituicao, quantidade, valorPago, dataCompra, valorInvestido, idUser, tipo)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
                `;
                params = [
                    dados.dados.nome.toUpperCase().trim(),
                    dados.dados.instituicao,
                    dados.dados.quantidade,
                    precoCompraFormatado,
                    formatDate(dados.dados.dataCompra),
                    precoCompraFormatado * dados.dados.quantidade,
                    parseInt(dados.token),
                    dados.dados.tipoInvestimento,
                ];

                // Adiciona a criação de ganhos de investimentos
                await db.query(query, params);
                await db.query(`
                    INSERT INTO GanhosInvestimentos (idUser, nomeInvestimento, dataDoRendimento, valor, tipoDeInvestimento)
                    VALUES (?, ?, ?, ?, ?);
                `, [
                    parseInt(dados.token),
                    dados.dados.nome.toUpperCase().trim(),
                    dataAtualFormatada,
                    0.00,
                    dados.dados.tipoInvestimento,
                ]);

                res.status(200).json({ message: 'Ação Cadastrada com Sucesso!' });
            } catch (error) {
                console.error('Erro ao Cadastrar Investimento:', error);
                res.status(500).json({ message: 'Erro ao Cadastrar Investimento.' });
            }
            break;

        case 'fii':
            try {
                const valorPagoFormatado = converteString(dados.dados.valorPago);
                query = `
                    INSERT INTO Investimentos (nome, instituicao, quantidade, valorPago, dataCompra, valorInvestido, idUser, tipo)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
                `;
                params = [
                    dados.dados.nome.toUpperCase().trim(),
                    dados.dados.instituicao,
                    dados.dados.quantidade,
                    valorPagoFormatado,
                    formatDate(dados.dados.dataCompra),
                    valorPagoFormatado * dados.dados.quantidade,
                    parseInt(dados.token),
                    dados.dados.tipoInvestimento,
                ];

                // Adiciona a criação de ganhos de investimentos
                await db.query(query, params);
                await db.query(`
                    INSERT INTO GanhosInvestimentos (idUser, nomeInvestimento, dataDoRendimento, valor, tipoDeInvestimento)
                    VALUES (?, ?, ?, ?, ?);
                `, [
                    parseInt(dados.token),
                    dados.dados.nome.toUpperCase().trim(),
                    dataAtualFormatada,
                    0.00,
                    dados.dados.tipoInvestimento,
                ]);

                res.status(200).json({ message: 'FII Cadastrado com Sucesso!' });
            } catch (error) {
                console.error('Erro ao Cadastrar FII:', error);
                res.status(500).json({ message: 'Erro ao Cadastrar FII.' });
            }
            break;

        case 'rendaFixa':
            try {
                const valorInvestidoFormatado = converteString(dados.dados.valorInvestido);
                query = `
                    INSERT INTO Investimentos (nome, tipoTitulo, valorInvestido, taxaJuros, dataCompra, dataVencimento, instituicao, idUser, tipo)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
                `;
                params = [
                    dados.dados.nome.toUpperCase().trim(),
                    dados.dados.tipoTitulo,
                    valorInvestidoFormatado,
                    parseFloat(dados.dados.taxaJuros),
                    formatDate(dados.dados.dataCompra),
                    formatDate(dados.dados.dataVencimento),
                    dados.dados.instituicao,
                    parseInt(dados.token),
                    dados.dados.tipoInvestimento,
                ];

                await db.query(query, params);
                res.status(200).json({ message: 'Investimento de Renda Fixa Cadastrado com Sucesso!' });
            } catch (error) {
                console.error('Erro ao Cadastrar Renda Fixa:', error);
                res.status(500).json({ message: 'Erro ao Cadastrar Investimento de Renda Fixa.' });
            }
            break;

        case 'cripto':
            try {
                const valorPagoFormatado = converteString(dados.dados.valorPago);
                query = `
                    INSERT INTO Investimentos (nome, instituicao, quantidade, valorPago, dataCompra, idUser, tipo)
                    VALUES (?, ?, ?, ?, ?, ?, ?);
                `;
                params = [
                    dados.dados.nome.toUpperCase().trim(),
                    dados.dados.instituicao || 'Exchange',
                    parseInt(dados.dados.quantidade),
                    valorPagoFormatado,
                    formatDate(dados.dados.dataCompra),
                    parseInt(dados.token),
                    dados.dados.tipoInvestimento,
                ];

                await db.query(query, params);
                res.status(200).json({ message: 'Criptomoeda Cadastrada com Sucesso!' });
            } catch (error) {
                console.error('Erro ao Cadastrar Criptomoeda:', error);
                res.status(500).json({ message: 'Erro ao Cadastrar Criptomoeda.' });
            }
            break;

        case 'fundo':
            try {
                const valorInvestidoFormatado = converteString(dados.dados.valorInvestido);
                query = `
                    INSERT INTO Investimentos (nome, tipoFundo, valorInvestido, dataCompra, idUser, tipo)
                    VALUES (?, ?, ?, ?, ?, ?);
                `;
                params = [
                    dados.dados.nome.toUpperCase().trim(),
                    dados.dados.tipoFundo || '',
                    valorInvestidoFormatado,
                    formatDate(dados.dados.dataCompra),
                    parseInt(dados.token),
                    dados.dados.tipoInvestimento,
                ];

                await db.query(query, params);
                res.status(200).json({ message: 'Fundo de Investimento Cadastrado com Sucesso!' });
            } catch (error) {
                console.error('Erro ao Cadastrar Fundo de Investimento:', error);
                res.status(500).json({ message: 'Erro ao Cadastrar Fundo de Investimento.' });
            }
            break;

        case 'previdencia':
            try {
                const valorInvestidoFormatado = converteString(dados.dados.valorInvestido);
                query = `
                    INSERT INTO Investimentos (nome, tipoPlano, valorInvestido, instituicao, dataCompra, idUser, tipo)
                    VALUES (?, ?, ?, ?, ?, ?, ?);
                `;
                params = [
                    dados.dados.nome.toUpperCase().trim(),
                    dados.dados.tipoPlano,
                    valorInvestidoFormatado,
                    dados.dados.instituicao.toUpperCase().trim(),
                    formatDate(dados.dados.dataCompra),
                    parseInt(dados.token),
                    dados.dados.tipoInvestimento,
                ];

                await db.query(query, params);
                res.status(200).json({ message: 'Plano de Previdência Cadastrado com Sucesso!' });
            } catch (error) {
                console.error('Erro ao Cadastrar Plano de Previdência:', error);
                res.status(500).json({ message: 'Erro ao Cadastrar Plano de Previdência.' });
            }
            break;

        case 'debentures':
            try {
                const valorInvestidoFormatado = converteString(dados.dados.valorInvestido);
                query = `
                    INSERT INTO Investimentos (nome, instituicao, valorInvestido, taxaJuros, dataCompra, dataVencimento, idUser, tipo)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
                `;
                params = [
                    dados.dados.nome.toUpperCase().trim(),
                    dados.dados.instituicao.toUpperCase().trim(),
                    valorInvestidoFormatado,
                    parseFloat(dados.dados.taxaJuros),
                    formatDate(dados.dados.dataCompra),
                    formatDate(dados.dados.dataVencimento),
                    parseInt(dados.token),
                    dados.dados.tipoInvestimento,
                ];

                await db.query(query, params);
                res.status(200).json({ message: 'Debênture Cadastrada com Sucesso!' });
            } catch (error) {
                console.error('Erro ao Cadastrar Debênture:', error);
                res.status(500).json({ message: 'Erro ao Cadastrar Debênture.' });
            }
            break;

        default:
            res.status(400).json({ message: 'Tipo de investimento não reconhecido.' });
            break;
    }


};

const obterMeusInvestimentos = async (req, res) => {
    // Lógica para buscar os investimentos do usuário

    try {
        const id = req.query.id;

        // Query SQL para buscar todos os investimentos do usuário com o id fornecido
        const query = `
            SELECT * FROM Investimentos WHERE idUser = ?
        `;

        // Executa a query passando o id do usuário como parâmetro
        const result = await db.query(query, [parseInt(id)]);
        // Verifica se o resultado é um array dentro de um array
        const investimentos = result[0] || []; // Pega apenas a primeira parte do resultado

        res.status(200).json(investimentos);
    } catch (error) {
        console.error("Erro ao obter investimentos:", error);
        res.status(500).json({ message: "Erro ao obter investimentos." });
    }

};

const atualizarValorInvestimento = async (req, res) => {
    // Lógica para atualizar o valor de um investimento
};

const venderCotasFundoImobiliario = async (req, res) => {
    // Lógica para vender cotas de um fundo imobiliário
};

const deletarInvestimento = async (req, res) => {
    // Lógica para deletar um investimento
};

const sacarInvestimentoVencido = async (req, res) => {
    // Lógica para sacar um investimento vencido
};

const obterTransacoes = async (req, res) => {
    // Lógica para obter transações relacionadas aos investimentos
};

const deletarTransacao = async (req, res) => {
    // Lógica para deletar uma transação de investimento
};

const obterLucratividade = async (req, res) => {
    // Lógica para calcular a lucratividade dos investimentos
};

const adicionarJuros = async (req, res) => {
    // Lógica para adicionar juros a um investimento
};

module.exports = {
    criarInvestimento,
    obterMeusInvestimentos,
    atualizarValorInvestimento,
    venderCotasFundoImobiliario,
    deletarInvestimento,
    sacarInvestimentoVencido,
    obterTransacoes,
    deletarTransacao,
    obterLucratividade,
    adicionarJuros,
};
