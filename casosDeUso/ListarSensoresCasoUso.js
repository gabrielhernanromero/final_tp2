class ListarSensoresCasoUso {
  constructor(sensorDao) {
    this.sensorDao = sensorDao;
  }

  ejecutar = async () => {
    return await this.sensorDao.listar();
  };
}

export default ListarSensoresCasoUso;
