// Middleware para validar los datos de una lectura recibida en POST /lecturas
import { TIPOS_VALIDOS } from "../utils.js";

const REGEX_ID = /^[A-Za-z0-9]{8}$/;

export const validarLectura = (req, res, next) => {
  const { id, tipo, valor, timestamp } = req.body;

  if (!id || typeof id !== "string" || !REGEX_ID.test(id)) {
    return res.status(400).json({
      errorMsg: 'El campo "id" debe ser un código alfanumérico de exactamente 8 caracteres',
    });
  }

  if (!tipo || !TIPOS_VALIDOS.includes(tipo)) {
    return res.status(400).json({
      errorMsg: `El campo "tipo" debe ser uno de: ${TIPOS_VALIDOS.join(", ")}`,
    });
  }

  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return res.status(400).json({
      errorMsg: 'El campo "valor" debe ser un número válido',
    });
  }

  if (!timestamp || typeof timestamp !== "string") {
    return res.status(400).json({
      errorMsg: 'El campo "timestamp" debe ser una cadena de texto',
    });
  }

  next();
};
