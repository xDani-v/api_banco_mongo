const express = require('express');
const movimientoController = require('../controllers/movimiento.controller');

const router = express.Router();

router.get('/', movimientoController.getAllMovimientos);
router.post('/c', movimientoController.getMovimientoc);
router.post('/', movimientoController.createMovimiento);
router.post('/im', movimientoController.insertarMovimiento);

// Add more routes as needed (PUT, DELETE, etc.)

module.exports = router;