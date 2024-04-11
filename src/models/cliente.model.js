const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    correo_electronico: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('clientes', ClienteSchema);