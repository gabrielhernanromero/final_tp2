// Middleware para manejar rutas no encontradas (404)
const notFound = (req, res) => {
    res.status(404).json({
        errorMsg: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
    });
};

export default notFound;
