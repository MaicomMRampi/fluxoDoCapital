const path = require('path');
const fs = require('fs');
const db = require('../config/db');
const { converteString } = require('../utils/converteString');
const formatDate = require('../utils/convertData');

const createAsset = async (req, res) => {
    console.log("chegou no controleld");
    try {
        const arquivo = req.file; // O arquivo enviado
        console.log("🚀 ~ createAsset ~ arquivo", arquivo)
        const dados = req.body;
        const nomeUper = dados.nome.toUpperCase();
        const valorPatr = converteString(dados.valor);

        // Salva o patrimônio no banco sem o documentoPath por enquanto
        const queryInsertPatrimonio = `
            INSERT INTO Patrimonio (nomePatrimonio, tipoPatrimonio, valorPatrimonio, dataAquisicao, idUser, observacao, localizacao, documentoPath)
            VALUES (?, ?, ?, ?, ?, ?, ?, NULL)
        `;

        const [result] = await db.query(queryInsertPatrimonio, [
            nomeUper,
            dados.tipopatrimonio,
            valorPatr,
            dados.dataaquisicao,
            parseInt(dados.idUser),
            dados.observacao,
            dados.localizacao,
        ]);

        const patrimonioId = result.insertId; // ID do patrimônio inserido

        // Se houver um arquivo, renomeie-o com o ID do patrimônio, mantendo o diretório original
        if (arquivo) {
            const novoNomeArquivo = `${patrimonioId}-${arquivo.originalname}`;
            const caminhoOriginal = arquivo.path; // Caminho original do arquivo
            const novoCaminho = path.join(path.dirname(caminhoOriginal), novoNomeArquivo); // Mesmo diretório, novo nome

            // Renomeia o arquivo no mesmo diretório
            fs.renameSync(caminhoOriginal, novoCaminho);

            // Atualiza o patrimônio com o nome do arquivo renomeado
            const queryUpdatePatrimonio = `
                UPDATE Patrimonio SET documentoPath = ? WHERE id = ?
            `;
            await db.query(queryUpdatePatrimonio, [novoNomeArquivo, patrimonioId]);
        }

        return res.status(200).json({ message: 'Patrimônio Cadastrado com Sucesso' });
    } catch (error) {
        console.log("Erro ao Cadastrar Patrimônio:", error);
        res.status(500).json({ message: 'Erro ao Cadastrar Patrimônio', error });
    }
};

const getAssets = async (req, res) => {
    try {
        const userId = parseInt(req.query.id);

        if (isNaN(userId)) {
            return res.status(400).json({ message: 'ID de usuário inválido.' });
        }

        const queryBuscaPatrimonio = `
            SELECT * FROM Patrimonio WHERE idUser = ?
        `;

        const [rows] = await db.query(queryBuscaPatrimonio, [userId]);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Erro ao buscar patrimônio:", error);
        res.status(500).json({ message: 'Erro ao buscar patrimônio.' });
    }
};

const createAssetExpense = async (req, res) => {
    const dados = req.body;
    console.log("🚀 ~ createAssetExpense ~ dados", dados);

    try {
        // Preparando a query de inserção com placeholders para evitar SQL Injection
        const query = `
            INSERT INTO despesaDeBens (
                idPatrimonio,
                observacao,
                tipoDespesaId,
                valor,
                responsavel,
                dataAquisicao,
                compradorPagador,
                idUser,
                observacaoInativacao,
                inativo
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, '', 0)
        `;

        // Substituindo undefined por null para valores não obrigatórios
        const idPatrimonio = parseInt(dados.values.nomepatrimonio) || null;
        const observacao = dados.values.observacao || null;
        const tipoDespesaId = parseInt(dados.values.tipodespesa) || null;
        const valor = converteString(dados.values.valorgasto) || null;
        const responsavel = dados.values.responsavel || null;
        const dataAquisicao = formatDate(dados.values.dataaquisicao) || null;
        const compradorPagador = dados.values.compradorpagador || null; // Certifique-se de que o nome está correto
        const idUser = parseInt(dados.id) || null;

        // Executando a query com os valores necessários
        await db.execute(query, [
            idPatrimonio,
            observacao,
            tipoDespesaId,
            valor,
            responsavel,
            dataAquisicao,
            compradorPagador,
            idUser
        ]);

        return res.status(200).json({ message: 'Despesa de Bem Cadastrada com Sucesso' });
    } catch (error) {
        console.log('Erro ao Cadastrar Despesa de Bem:', error);
        return res.status(500).json({ message: 'Erro ao Cadastrar Despesa de Bem', error });
    }


};

const getAssetDetails = async (req, res) => {
    // Lógica para buscar detalhes de patrimônio

    try {
        const dados = req.query.id;

        // Query SQL para buscar as despesas do patrimônio, incluindo dados de TipoDespesa e Patrimonio
        const query = `
           SELECT db.*, td.*, p.*,
            db.dataaquisicao AS dataDespesa

            FROM despesaDeBens AS db
            LEFT JOIN TipoDespesa AS td ON db.tipoDespesaId = td.id
            LEFT JOIN Patrimonio AS p ON db.idPatrimonio = p.id
            WHERE db.idPatrimonio = ?
        `;

        // Executando a query com o parâmetro necessário
        const [despesasPatrimonio] = await db.execute(query, [parseInt(dados)]);

        res.status(200).json(despesasPatrimonio);
    } catch (error) {
        console.error('Erro ao buscar despesas do patrimônio:', error);
        res.status(500).json({ message: 'Despesas não encontradas' });
    }

};

const getAssetsHome = async (req, res) => {
    // Lógica para buscar patrimônios na home
    try {
        const dados = parseInt(req.query.id);

        // Consulta SQL para buscar patrimônios pelo id do usuário
        const [despesasPatrimonio] = await db.execute(
            `SELECT * FROM Patrimonio WHERE idUser = ?`,
            [dados]
        );

        res.status(200).json(despesasPatrimonio);
    } catch (error) {
        console.error('Erro ao buscar despesas do patrimônio:', error);
        res.status(500).json({ message: 'Despesas não encontradas' });
    }
};
const deactivateAsset = async (req, res) => {
    // Lógica para inativar patrimônio

    const dados = req.body;

    try {
        // Query SQL para atualizar a despesa de bem
        const query = `
        UPDATE despesaDeBens
        SET observacaoInativacao = ?, inativo = ?
        WHERE id = ?
    `;

        // Executando a query com os valores necessários
        await db.execute(query, [
            dados.observacao, // Observação de inativação
            1,                // Valor para o campo "inativo"
            parseInt(dados.dados) // ID do registro a ser atualizado
        ]);

        return res.status(200).json({ message: 'Despesa de Bem Cadastrada com Sucesso' });
    } catch (error) {
        console.error('Erro ao Cadastrar Despesa de Bem:', error);
        return res.status(500).json({ message: 'Erro ao Cadastrar Despesa de Bem', error });
    }

};

const deleteAsset = async (req, res) => {
    // Lógica para deletar patrimônio
};

module.exports = {
    createAsset,
    getAssets,
    getAssetsHome,
    createAssetExpense,
    deactivateAsset,
    getAssetDetails,
    deleteAsset,
};