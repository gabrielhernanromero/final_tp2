import Sensor from "../models/Sensor.js";
import Lectura from "../models/Lectura.js";
import { evaluarAlerta } from "../utils.js";

class ProcesarLecturaCasoUso {
  constructor(sensorDao, alertaDao) {
    this.sensorDao = sensorDao;
    this.alertaDao = alertaDao;
  }

  ejecutar = async ({ id, tipo, valor, timestamp }) => {
    const existente = await this.sensorDao.buscarPorId(id);

    const sensor = new Sensor({ id, tipo, valor, timestamp });
    await this.sensorDao.guardar(sensor);

    const mensajeAlerta = evaluarAlerta(tipo, valor);
    const lectura = new Lectura({ id, tipo, valor, timestamp, alerta: mensajeAlerta });

    if (mensajeAlerta) {
      await this.alertaDao.crear(lectura);
    }

    return { lectura, creado: !existente };
  };
}

export default ProcesarLecturaCasoUso;
