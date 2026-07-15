class Controller {
  constructor(procesarLecturaCasoUso, listarSensoresCasoUso, listarAlertasCasoUso) {
    this.procesarLecturaCasoUso = procesarLecturaCasoUso;
    this.listarSensoresCasoUso = listarSensoresCasoUso;
    this.listarAlertasCasoUso = listarAlertasCasoUso;
  }

  procesarLectura = async (req, res, next) => {
    try {
      const { id, tipo, valor, timestamp } = req.body;
      const { lectura, creado } = await this.procesarLecturaCasoUso.ejecutar({ id, tipo, valor, timestamp });
      res.status(creado ? 201 : 200).json(lectura);
    } catch (error) {
      next(error);
    }
  };

  listarSensores = async (req, res, next) => {
    try {
      const sensores = await this.listarSensoresCasoUso.ejecutar();
      res.status(200).json(sensores);
    } catch (error) {
      next(error);
    }
  };

  listarAlertas = async (req, res, next) => {
    try {
      const alertas = await this.listarAlertasCasoUso.ejecutar();
      res.status(200).json(alertas);
    } catch (error) {
      next(error);
    }
  };
}

export default Controller;
