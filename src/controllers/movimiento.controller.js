const mongoose = require('mongoose');
const Movimiento = require('../models/movimiento.model');
const Cuenta = require('../models/cuenta.model'); // Asegúrate de importar el modelo de Cuenta

exports.getAllMovimientos = async (req, res) => {
    try {
        const Movimientos = await Movimiento.find();
        res.status(200).json(Movimientos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMovimientoc = async (req, res) => {
    try {
        const movimientos = await Movimiento.find({ id_cuenta: req.body.id_cuenta });
        if (!movimientos || movimientos.length === 0) {
            return res.status(404).json({ message: 'Cannot find movimientos' });
        }
        res.json(movimientos);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.createMovimiento = async (req, res) => {
    const Movimiento = new Movimiento({
        _id: new mongoose.Types.ObjectId(),
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        correo_electronico: req.body.correo_electronico,
        telefono: req.body.telefono,
        password: req.body.password
    });

    try {
        const newMovimiento = await Movimiento.save();
        res.status(201).json(newMovimiento);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getMovimientoMovimientos = async (req, res) => {
    try {
        const Movimientos = await MovimientoMovimientos.find();
        res.status(200).json(Movimientos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.insertarMovimiento = async (req, res) => {
    const nuevoMovimiento = new Movimiento({
        _id: new mongoose.Types.ObjectId(),
        id_cuenta: req.body.id_cuenta,
        tipo_movimiento: req.body.tipo_movimiento,
        monto: req.body.monto,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion,
        saldo: req.body.saldo
    });
    try {
        // Inserta el nuevo movimiento
        await nuevoMovimiento.save();

        // Encuentra la cuenta asociada con el movimiento
        const cuenta = await Cuenta.findOne({ id_cuenta: nuevoMovimiento.id_cuenta });

        // Actualiza el saldo de la cuenta
        if (nuevoMovimiento.tipo_movimiento === 'depósito') {
            cuenta.saldo += nuevoMovimiento.monto;
        } else if (nuevoMovimiento.tipo_movimiento === 'retiro') {
            cuenta.saldo -= nuevoMovimiento.monto;
        }

        // Guarda la cuenta actualizada
        await cuenta.save();

        res.status(201).json(nuevoMovimiento);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};