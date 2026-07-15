class AlertaDao {
  #alertas = [];

  crear = async (alerta) => {
    this.#alertas.push(alerta);
    return alerta;
  };

  listar = async () => {
    return this.#alertas;
  };
}

export default AlertaDao;
