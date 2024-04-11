const express = require('express');
const mongoose = require('mongoose');
const clienteRoutes = require('./routes/cliente.routes');
const cuentaRoutes = require('./routes/cuenta.routes');
const movimientoRoutes = require('./routes/movimientos.routes');

const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/clientes', clienteRoutes);
app.use('/cuenta', cuentaRoutes);
app.use('/movimientos', movimientoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));