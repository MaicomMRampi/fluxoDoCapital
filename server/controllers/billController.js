
const db = require('../config/db');
const formatDate = require('../utils/convertData');
const { converteString } = require('../utils/converteString');


const criarContas = async (req, res) => {
    const nome = req.body;
    const dataFormata = formatDate(nome.dados.datavencimento);

    let dataVencimento = new Date(dataFormata); // Inicia com a data de vencimento original
    const diaVenc = dataVencimento.getDate();
    const mesVenc = dataVencimento.getMonth() + 1;
    const anoVenc = dataVencimento.getFullYear();
    const mes_ano = `${anoVenc}-${mesVenc < 10 ? `0${mesVenc}` : mesVenc}`;

    try {
        if (nome.dados.qtdparcelas < 2 || nome.dados.qtdparcelas === undefined) {
            const query = `
                INSERT INTO Contas (idUser, estabelecimento, comprador, pagador, valor, dataVencimento, qtdParcelas, mesCorrespondente)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const valores = [
                parseInt(nome.idUsuario),
                nome.dados.estabelecimento.toUpperCase().trim(),
                nome.dados.comprador,
                nome.dados.pagador,
                converteString(nome.dados.valor),
                dataFormata,
                nome.dados.qtdparcelas ? parseInt(nome.dados.qtdparcelas) : null,
                mes_ano
            ];
            await db.query(query, valores);
        } else {
            for (let i = 0; i < nome.dados.qtdparcelas; i++) {
                const diaVenc = dataVencimento.getDate();
                const mesVenc = dataVencimento.getMonth() + 1;
                const anoVenc = dataVencimento.getFullYear();
                const dataVencimentoFormatada = `${anoVenc}/${mesVenc < 10 ? `0${mesVenc}` : mesVenc}/${diaVenc}`;
                const mes_ano = `${anoVenc}-${mesVenc < 10 ? `0${mesVenc}` : mesVenc}`;

                const queryParcelada = `
                    INSERT INTO Contas (idUser, estabelecimento, comprador, pagador, valor, dataVencimento, qtdParcelas, mesCorrespondente)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                `;
                const valoresParcelada = [
                    parseInt(nome.idUsuario),
                    nome.dados.estabelecimento.toUpperCase().trim(),
                    nome.dados.comprador,
                    nome.dados.pagador,
                    converteString(nome.dados.valor) / nome.dados.qtdparcelas,
                    dataVencimentoFormatada,
                    nome.dados.qtdparcelas ? parseInt(nome.dados.qtdparcelas) : null,
                    mes_ano
                ];
                await db.query(queryParcelada, valoresParcelada);

                // Incrementa para o próximo mês de vencimento
                dataVencimento.setMonth(dataVencimento.getMonth() + 1);

                // Se for o último mês do ano, avança para o próximo ano e mês 1 (janeiro)
                if (mesVenc === 12) {
                    dataVencimento.setFullYear(anoVenc + 1);
                    dataVencimento.setMonth(0); // Janeiro é representado pelo mês 0
                }
            }
        }
        res.status(200).json({ message: 'Conta(s) salva(s) com sucesso' });
    } catch (error) {
        console.error('Erro ao processar a despesa:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
const contaMesAtual = async (req, res) => {
    try {
        const id = parseInt(req.query.id);
        const mesAtual = new Date();
        const mes = mesAtual.getMonth() + 1;
        const ano = mesAtual.getFullYear();
        const iniciaPadraoData = `${ano}-${mes < 10 ? `0${mes}` : mes}`;

        // Consulta SQL para buscar contas do usuário em um mês específico
        const [buscaConta] = await db.execute(
            `SELECT * FROM Contas WHERE idUser = ? AND mesCorrespondente = ?`,
            [id, iniciaPadraoData]
        );

        res.json(buscaConta);
    } catch (error) {
        console.log('Erro ao buscar despesas:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}
const buscaContaData = async (req, res) => {
    try {
        const dados = req.body;
        const idUser = parseInt(dados.id);
        const mesCorrespondente = dados.data;

        const query = `
            SELECT * FROM Contas
            WHERE idUser = ? AND mesCorrespondente = ?
        `;
        const valores = [idUser, mesCorrespondente];

        const [buscaConta] = await db.query(query, valores);

        res.json(buscaConta);
    } catch (error) {
        console.error('Erro ao buscar despesas:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}
const buscaConta = async (req, res) => {
    try {
        const idUser = parseInt(req.query.id); // Converte o ID do usuário para número inteiro

        const query = `
            SELECT * FROM Contas
            WHERE idUser = ?
        `;
        const valores = [idUser];

        const [buscaConta] = await db.query(query, valores);

        res.json(buscaConta);
    } catch (error) {
        console.error('Erro ao buscar despesas:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}
const pagaConta = async (req, res) => {
    try {
        const { id } = req.body; // Extrai o ID da conta do corpo da requisição

        // Busca o status de pagamento atual da conta
        const buscaQuery = `SELECT pago FROM Contas WHERE id = ?`;
        const [buscaConta] = await db.query(buscaQuery, [parseInt(id)]);

        // Verifica se a conta foi encontrada
        if (buscaConta.length === 0) {
            return res.status(404).json({ message: 'Conta não encontrada' });
        }

        // Define o novo valor para o campo "pago"
        const novoStatusPago = buscaConta[0].pago === 0 ? 1 : 0;

        // Atualiza o campo "pago" da conta
        const atualizaQuery = `UPDATE Contas SET pago = ? WHERE id = ?`;
        await db.query(atualizaQuery, [novoStatusPago, parseInt(id)]);

        res.status(200).json({ message: "Status de pagamento atualizado com sucesso" });
    } catch (error) {
        console.error('Erro ao atualizar o status de pagamento:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}
const contaProximaVencer = async (req, res) => {
    const id = req.query.id;
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();
    const dataAtualFormatada = `${anoAtual}/${mesAtual < 10 ? `0${mesAtual}` : mesAtual}/${diaAtual < 10 ? `0${diaAtual}` : diaAtual}`;

    // Adiciona 10 dias à data atual
    dataAtual.setDate(dataAtual.getDate() + 10);
    const anoFim = dataAtual.getFullYear();
    const mesFim = dataAtual.getMonth() + 1;
    const diaFim = dataAtual.getDate();
    const dataFimFormatada = `${anoFim}/${mesFim < 10 ? `0${mesFim}` : mesFim}/${diaFim < 10 ? `0${diaFim}` : diaFim}`;

    try {
        // Consulta SQL para buscar contas
        const [buscaConta] = await db.query(
            `SELECT * FROM Contas 
            WHERE idUser = ? 
            AND dataVencimento between ? 
            AND ? 
            AND pago = 0`,
            [parseInt(id), dataAtualFormatada, dataFimFormatada]
        );

        res.json(buscaConta);
    } catch (error) {
        console.error('Erro ao buscar contas:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}
module.exports = {
    criarContas,
    contaMesAtual,
    buscaContaData,
    contaProximaVencer,
    buscaConta,
    pagaConta
};
