import SensorDao from "../Dao/SensorDao.js";
import AlertaDao from "../Dao/AlertaDao.js";
import ProcesarLecturaCasoUso from "../casosDeUso/ProcesarLecturaCasoUso.js";
import ListarSensoresCasoUso from "../casosDeUso/ListarSensoresCasoUso.js";
import ListarAlertasCasoUso from "../casosDeUso/ListarAlertasCasoUso.js";
import Controller from "../controller/controller.js";

const sensorDao = new SensorDao();
const alertaDao = new AlertaDao();

const procesarLecturaCasoUso = new ProcesarLecturaCasoUso(sensorDao, alertaDao);
const listarSensoresCasoUso = new ListarSensoresCasoUso(sensorDao);
const listarAlertasCasoUso = new ListarAlertasCasoUso(alertaDao);

const controller = new Controller(procesarLecturaCasoUso, listarSensoresCasoUso, listarAlertasCasoUso);

const obtenerController = () => controller;

export default obtenerController;
