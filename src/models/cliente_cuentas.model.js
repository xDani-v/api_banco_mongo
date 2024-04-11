const mongoose = require('mongoose');
const ClienteCuentasSchema = new mongoose.Schema({}, { collection: 'cliente_cuentas' });

module.exports = mongoose.model('cliente_cuentas', ClienteCuentasSchema);