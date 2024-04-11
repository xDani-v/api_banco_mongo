const mongoose = require('mongoose');
const Cliente = require('../models/cliente.model');
const ClienteCuentas = require('../models/cliente_cuentas.model');

exports.getClienteCuentas = async (req, res) => {
    try {
        const cuentas = await ClienteCuentas.find();
        res.status(200).json(cuentas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (cliente == null) {
            return res.status(404).json({ message: 'Cannot find cliente' });
        }
        res.json(cliente);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.createCliente = async (req, res) => {
    const cliente = new Cliente({
        _id: new mongoose.Types.ObjectId(),
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        correo_electronico: req.body.correo_electronico,
        telefono: req.body.telefono,
        password: req.body.password
    });

    try {
        const newCliente = await cliente.save();
        res.status(201).json(newCliente);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedCliente == null) {
            res.status(404).json({ message: 'Cannot find cliente' });
        } else {
            res.status(200).json(updatedCliente);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.validateCuenta = async (req, res) => {
    try {
        const cuenta = await Cliente.findOne({ cedula: req.body.cedula, password: req.body.password });
        if (!cuenta) {
            return res.status(404).json({ message: 'Cuenta no encontrada o credenciales inválidas' });
        }
        res.json(cuenta);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
// Add more controller methods as needed (update, delete, etc.)