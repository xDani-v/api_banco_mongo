const mongoose = require('mongoose');
const Cuenta = require('../models/cuenta.model');


exports.getAllCuentas = async (req, res) => {
    try {
        const Cuentas = await Cuenta.find();
        res.status(200).json(Cuentas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCuenta = async (req, res) => {
    try {
        const cuentas = await Cuenta.find({ cliente_id: req.body.cliente_id });
        if (!cuentas || cuentas.length === 0) {
            return res.status(404).json({ message: 'Cannot find Cuentas' });
        }
        res.json(cuentas);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};




exports.createCuenta = async (req, res) => {
    const nuevo = new Cuenta({
        _id: new mongoose.Types.ObjectId(),
        id_cuenta: req.body.id_cuenta,
        tipo_cuenta: req.body.tipo_cuenta,
        saldo: req.body.saldo,
        fecha_apertura: req.body.fecha_apertura,
        cliente_id: req.body.cliente_id
    });

    try {
        const newCuenta = await nuevo.save();
        res.status(201).json(newCuenta);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getCuentaCuentas = async (req, res) => {
    try {
        const cuentas = await CuentaCuentas.find();
        res.status(200).json(cuentas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.validateCuenta = async (req, res) => {
    try {
        const Cuenta = await Cuenta.findOne({ cedula: req.body.cedula, password: req.body.password });
        if (Cuenta == null) {
            return res.status(404).json({ message: 'Cannot find Cuenta' });
        }
        res.json(Cuenta);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
