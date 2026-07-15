import { Router } from "express";
import obtenerController from "../factories/factory.js";
import { validarLectura } from "../middleware/validateRequest.js";

const router = Router();
const controller = obtenerController();

// Recibe una lectura y actualiza (o crea) el sensor correspondiente
router.post("/lecturas", validarLectura, controller.procesarLectura);

// Lista todos los sensores con su última lectura
router.get("/sensores", controller.listarSensores);

// Lista las alertas activas generadas por los sensores registrados
router.get("/alertas", controller.listarAlertas);

export default router;
