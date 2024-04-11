module.exports = function manejadorErrores(err, req, res, next) {
    // Registra el error, por ejemplo usando Winston o Morgan
    console.error(err);

    // Envía un mensaje de error genérico al cliente
    res.status(500).send({ error: 'Ocurrió un error, por favor intenta de nuevo más tarde.' });
};