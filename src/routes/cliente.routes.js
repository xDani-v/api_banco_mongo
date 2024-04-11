const express = require('express');
const clienteController = require('../controllers/cliente.controller');

const router = express.Router();

router.get('/', clienteController.getAllClientes);
router.get('/cc', clienteController.getClienteCuentas);
router.post('/login', clienteController.validateCuenta);
router.get('/:id', clienteController.getCliente);
router.post('/', clienteController.createCliente);
router.put('/:id', clienteController.updateCliente);

// Add more routes as needed (PUT, DELETE, etc.)

module.exports = router;