// Middleware para manejo centralizado de errores
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        errorMsg: err.message || 'Error interno del servidor',
    });
};

export default errorHandler;
