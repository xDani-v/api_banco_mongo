const mongoose = require('mongoose');

const CuentaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id_cuenta: {
        type: String,
        required: true,
        unique: true
    },
    tipo_cuenta: {
        type: String,
        required: true
    },
    saldo: {
        type: Number,
        required: true
    },
    fecha_apertura: {
        type: Date,
        required: true
    },
    cliente_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cuentas', CuentaSchema);