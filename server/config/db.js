const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,   // Mantém a conexão ativa
    keepAliveInitialDelay: 10000  // Delay antes do primeiro pacote de keep-alive em ms
});


// Verifica se a conexão foi estabelecida com sucesso
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Conexão com o MySQL foi perdida. Tente novamente.');
        } else {
            console.error('Erro ao obter a conexão com o MySQL:', err);
        }
    }
    if (connection) {
        connection.release();
        console.log('Conexão com o MySQL estabelecida com sucesso.');
    }
});


module.exports = pool.promise();
