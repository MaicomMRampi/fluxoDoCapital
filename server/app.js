require('dotenv/config');

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Corrigido para usar o caminho correto

const app = express();

// Configuração do CORS
app.use(cors({
    origin: '*', // Permite qualquer origem
    methods: ['*'], // Permite qualquer método
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite cabeçalhos específicos
}));

// Middleware para analisar requisições JSON
app.use(express.json());

// Rotas
app.use(userRoutes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
