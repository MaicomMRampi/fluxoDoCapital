const express = require('express');
const { createUser } = require('../controller/userControler');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/api/postusers', createUser);

module.exports = router;
