const mongoose = require('mongoose');

const MovimientoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id_cuenta: {
        type: String,
        required: true
    },
    tipo_movimiento: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    saldo: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('movimientos', MovimientoSchema);