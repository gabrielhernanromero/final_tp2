class ListarAlertasCasoUso {
  constructor(alertaDao) {
    this.alertaDao = alertaDao;
  }

  ejecutar = async () => {
    return await this.alertaDao.listar();
  };
}

export default ListarAlertasCasoUso;
