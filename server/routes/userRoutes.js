
const express = require('express');
const router = express.Router();
const upload = require('../config/uploadImagem');
const uploadDoc = require('../config/uploadDoc');


// ... (código dos módulos multer, mercado pago, etc.)

// Controllers
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
// const paymentController = require('../controllers/paymentController');
const assetController = require('../controllers/assetController');
const expenseController = require('../controllers/expenseController');
const despesaController = require('../controllers/despesaController');
const investmentController = require('../controllers/investmentController');
const nomeFundoController = require('../controllers/nomeFundoController');
const nomeAcaoController = require('../controllers/nomeAcaoController');
const categoryController = require('../controllers/categoryController');
const paymentMethodController = require('../controllers/paymentMethodController');
const bankController = require('../controllers/bankController');
const billController = require('../controllers/billController')
const budgetController = require('../controllers/budgetController')



// Rotas de Autenticação
router.post('/api/login', authController.login);
router.put('/api/esqueceusenha', authController.forgotPassword)


// // Rotas de Usuário
router.post('/api/postusers', userController.createUser);
router.post('/api/atualizacadastro', userController.updateUser);
router.post('/api/upload', upload.single('image'), userController.uploadImage);
router.put('/api/fechamodalboasvindas', userController.closeModal);



// // Rotas de Pagamento
// router.post('/api/geracobranca', paymentController.createCharge);
// router.get('/api/verificapagamento', paymentController.verifyPayment);
// router.put('/api/alterapagamento', paymentController.updatePaymentStatus);
// router.get('/api/buscaultimapagamento', paymentController.getLastPayment);
// router.get('/api/usuariopagamento', paymentController.getUserPayments);
// router.post('/api/criapagamento', paymentController.createPayment); //rota nao esta sendo usada
// router.post('/api/postpagamento', paymentController.processPayment);




// // Rotas de Patrimônio
router.post('/api/postpatrimonio', uploadDoc.single('document'), assetController.createAsset);
router.get('/api/buscabem', assetController.getAssets);
// router.post('/api/despesadeconsumo', assetController.createAssetExpense);
// router.put('/api/inativarpatrimonio', assetController.deactivateAsset);
// router.get('/api/detalhespatrimonio', assetController.getAssetDetails);
router.get('/api/detalhespatrimoniohome', assetController.getAssetsHome);
// router.get('/api/buscadespesasdetalhesnome', assetController.getAssetExpensesByName); //rota nao esta sendo usada
// router.delete('/api/deletapatrimonio', assetController.deleteAsset);
// router.delete('/api/deletadespesapatrimonio', assetController.deleteAssetExpense);





// // Rotas de Tipo de Despesa
router.post('/api/novotipodespesa', expenseController.createExpenseType);
router.get('/api/buscatipodespesa', expenseController.getExpenseTypes);
router.delete('/api/deletatipodespesa', expenseController.deleteExpenseType);




// // Rotas de Fundo Imobiliário (Nome)
router.post('/api/novonome', nomeFundoController.createFundName);
router.get('/api/buscanomefundonovo', nomeFundoController.getFundNames);
router.delete('/api/deletanomefundonovo', nomeFundoController.deleteFundName);



// // Rotas de Nome de Ação
router.post('/api/novonomeacao', nomeAcaoController.criarNomeAcao);
router.get('/api/buscanomeacao', nomeAcaoController.buscaNomeAcao);
router.delete('/api/deletanomeacao', nomeAcaoController.deletarNomeAcao);



// // Rotas de Investimentos
router.post('/api/novoinvestimento', investmentController.criarInvestimento);
router.get('/api/meusinvestimentos', investmentController.obterMeusInvestimentos);
// router.put('/api/atualizavalor', investmentController.atualizarValorInvestimento);
// router.put('/api/vendacotasfundoimobiliario', investmentController.venderCotasFundoImobiliario);
// router.delete('/api/deletainvestimento', investmentController.deletarInvestimento);
// router.post('/api/sacarvencido', investmentController.sacarInvestimentoVencido);
// router.get('/api/transacoes', investmentController.obterTransacoes);
// router.delete('/api/deletatransacao', investmentController.deletarTransacao);
// router.get('/api/lucratividade', investmentController.obterLucratividade);
// router.post('/api/adicionarjuros', investmentController.adicionarJuros);




// // Rotas de Categoria
router.post('/api/novacategoria', categoryController.createCategory);
router.get('/api/buscacategoria', categoryController.getCategories);
router.delete('/api/deletacategoria', categoryController.deleteCategory);


// // Rotas de Forma de Pagamento
router.post('/api/novaformapagamento', paymentMethodController.createPaymentMethod);
router.get('/api/buscaformapagamento', paymentMethodController.getPaymentMethods);
router.delete('/api/deletaformapagamento', paymentMethodController.deletePaymentMethod);




// // Rotas de Despesas
router.post('/api/novadespesa', despesaController.novaDespesa);
router.get('/api/buscadespesa', despesaController.buscaDespesa);
router.get('/api/buscadespesamesatual', despesaController.buscaDespesaMesAtual);
// router.post('/api/buscadespesadata', despesaController.buscaDespesaData);
// router.delete('/api/deletadespesa', despesaController.deletaDespesa);
// router.put('/api/updatepagante', despesaController.atualizarPagante);


// // Rotas de fatura
// router.post('/api/fecharfatura', expenseController.closeBill);


// // Rotas de conta
router.post('/api/novaconta', billController.criarContas); //Criar uma conta, na verdade, é criar uma nova fatura
router.get('/api/buscacontaproximavencer', billController.contaProximaVencer);
router.get('/api/buscaconta', billController.buscaConta);
router.get('/api/buscacontamesatual', billController.contaMesAtual);
router.post('/api/buscacontadata', billController.buscaContaData);
router.put('/api/pagaconta', billController.pagaConta);



// // Rotas de Banco
router.post('/api/banco', bankController.createBank);
router.get('/api/buscabanco', bankController.getBanks);
router.delete('/api/deletabanco', bankController.deleteBank);


// // Rotas de Orçamento
router.post('/api/controleorcamento', budgetController.ControleMensal)

// ... (outras rotas)


module.exports = router;

