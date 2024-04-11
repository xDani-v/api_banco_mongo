const express = require('express');
const cuentaController = require('../controllers/cuenta.controller');

const router = express.Router();

router.get('/', cuentaController.getAllCuentas);
router.post('/cc', cuentaController.getCuenta);
router.post('/', cuentaController.createCuenta);

// Add more routes as needed (PUT, DELETE, etc.)

module.exports = router;