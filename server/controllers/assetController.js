const path = require('path');
const fs = require('fs');
const db = require('../config/db');
const { converteString } = require('../utils/converteString');

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
    try {
        const dados = req.body;

        // Prepara a query SQL para inserir a despesa na tabela despesaDeBens
        const query = `
            INSERT INTO DespesaDeBens (
                idPatrimonio, observacao, kmAntigo, kmAtual,
                tipoDespesaId, valor, responsavel, dataAquisicao,
                compradorPagador, idUser, observacaoInativacao, inativo
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const valores = [
            parseInt(dados.values.nomepatrimonio),
            dados.values.observacao,
            dados.values.kmAntigo,
            dados.values.kmAtual,
            parseInt(dados.values.tipodespesa),
            converteString(dados.values.valorgasto),
            dados.values.responsavel,
            formatDate(dados.values.dataaquisicao),
            dados.values.compradorPagador,
            parseInt(dados.id),
            '', // observacaoInativacao
            0 // inativo
        ];

        // Executa a query com os valores
        await db.query(query, valores);

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
    createAssetExpense,
    deleteAsset,
};