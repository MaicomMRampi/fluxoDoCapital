
const express = require('express');
const router = express.Router();




// ... (código dos módulos multer, mercado pago, etc.)

// Controllers
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
// const paymentController = require('../controllers/paymentController');
// const assetController = require('../controllers/assetController');
// const expenseController = require('../controllers/expenseController');
// const investmentController = require('../controllers/investmentController');
// const categoryController = require('../controllers/categoryController');
// const paymentMethodController = require('../controllers/paymentMethodController');
// const bankController = require('../controllers/bankController');
// const billController = require('../controllers/billController')
// const budgetController = require('../controllers/budgetController')



// Rotas de Autenticação
router.post('/api/login', authController.login);
router.put('/api/esqueceusenha', authController.forgotPassword)


// // Rotas de Usuário
router.post('/api/postusers', userController.createUser);
router.post('/api/atualizacadastro', userController.updateUser);
// router.post('/api/upload', upload.single('image'), userController.uploadImage);
// router.put('/api/fechamodalboasvindas', userController.closeModal);
// //router.get('/api/downloaddoc', userController.downloadDoc); // Não está sendo usada no código original


// // Rotas de Pagamento
// router.post('/api/geracobranca', paymentController.createCharge);
// router.get('/api/verificapagamento', paymentController.verifyPayment);
// router.put('/api/alterapagamento', paymentController.updatePaymentStatus);
// router.get('/api/buscaultimapagamento', paymentController.getLastPayment);
// router.get('/api/usuariopagamento', paymentController.getUserPayments);
// router.post('/api/criapagamento', paymentController.createPayment); //rota nao esta sendo usada
// router.post('/api/postpagamento', paymentController.processPayment);




// // Rotas de Patrimônio
// router.post('/api/postpatrimonio', uploaddoc.single('document'), assetController.createAsset);
// router.get('/api/buscabem', assetController.getAssets);
// router.post('/api/despesadeconsumo', assetController.createAssetExpense);
// router.put('/api/inativarpatrimonio', assetController.deactivateAsset);
// router.get('/api/detalhespatrimonio', assetController.getAssetDetails);
// router.get('/api/detalhespatrimoniohome', assetController.getAssetsHome); // rota nao esta sendo usada
// router.get('/api/buscadespesasdetalhesnome', assetController.getAssetExpensesByName); //rota nao esta sendo usada
// router.delete('/api/deletapatrimonio', assetController.deleteAsset);
// router.delete('/api/deletadespesapatrimonio', assetController.deleteAssetExpense);





// // Rotas de Tipo de Despesa
// router.post('/api/novotipodespesa', expenseController.createExpenseType);
// router.get('/api/buscatipodespesa', expenseController.getExpenseTypes);
// router.delete('/api/deletatipodespesa', expenseController.deleteExpenseType);




// // Rotas de Fundo Imobiliário (Nome)
// router.post('/api/novonome', investmentController.createFundName);
// router.get('/api/buscanomefundonovo', investmentController.getFundNames);
// router.delete('/api/deletanomefundonovo', investmentController.deleteFundName);



// // Rotas de Nome de Ação
// router.post('/api/novonomeacao', investmentController.createStockName);
// router.get('/api/buscanomeacao', investmentController.getStockNames);
// router.delete('/api/deletanomeacao', investmentController.deleteStockName);




// // Rotas de Proventos
// //router.get('/api/proventos', investmentController.getDividends); //rota nao esta sendo usada no front
// router.post('/api/proventos', investmentController.createDividend);




// // Rotas de Dividendos
// router.get('/api/dividendos', investmentController.getDividends); //rota nao esta sendo usada no front


// // Rotas de Investimentos
// router.post('/api/novoinvestimento', investmentController.createInvestment);
// router.get('/api/meusinvestimentos', investmentController.getMyInvestments);
// router.put('/api/atualizavalor', investmentController.updateInvestmentValue);
// router.put('/api/vendacotasfii', investmentController.sellFundShares);
// router.delete('/api/deletaInvestimento', investmentController.deleteInvestment);
// router.post('/api/sacarvencido', investmentController.withdrawMaturedInvestment);
// router.get('/api/transacoes', investmentController.getTransactions);
// router.delete('/api/deletatransacao', investmentController.deleteTransaction);
// router.get('/api/lucratividade', investmentController.getProfitability);
// router.post('/api/addjuros', investmentController.addInterest);



// // Rotas de Categoria
// router.post('/api/novacategoria', categoryController.createCategory);
// router.get('/api/buscacategoria', categoryController.getCategories);
// router.delete('/api/deletacategoria', categoryController.deleteCategory);


// // Rotas de Forma de Pagamento
// router.post('/api/novaformapagamento', paymentMethodController.createPaymentMethod);
// router.get('/api/buscaformapagamento', paymentMethodController.getPaymentMethods);
// router.delete('/api/deletaformapagamento', paymentMethodController.deletePaymentMethod);




// // Rotas de Despesas
// router.post('/api/novadespesa', expenseController.createExpense);
// router.get('/api/buscadespesa', expenseController.getExpenses);
// router.get('/api/buscadespesamesatual', expenseController.getCurrentMonthExpenses);
// router.post('/api/buscadespesadata', expenseController.getExpensesByDate);
// router.delete('/api/deletadespesa', expenseController.deleteExpense);
// router.put('/api/updatepagante', expenseController.updatePayer);


// // Rotas de fatura
// router.post('/api/fecharfatura', billController.closeBill);


// // Rotas de conta
// router.post('/api/novaconta', billController.createBill); //Criar uma conta, na verdade, é criar uma nova fatura
// router.get('/api/buscacontaproximavencer', billController.getBillsNextToExpire);
// router.get('/api/buscaconta', billController.getBills);
// router.get('/api/buscacontamesatual', billController.getCurrentMonthBills);
// router.post('/api/buscacontadata', billController.getBillsByDate);
// router.put('/api/pagaconta', billController.payBill);



// // Rotas de Banco
// router.post('/api/banco', bankController.createBank);
// router.get('/api/buscabanco', bankController.getBanks);
// router.delete('/api/deletabanco', bankController.deleteBank);


// // Rotas de Orçamento
// router.post('/api/controleorcamento', budgetController.getBudgetControl)

// ... (outras rotas)


module.exports = router;

