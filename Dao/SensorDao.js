class SensorDao {
  #sensores = new Map();

  buscarPorId = async (id) => {
    return this.#sensores.get(id) || null;
  };

  guardar = async (sensor) => {
    this.#sensores.set(sensor.id, sensor);
    return sensor;
  };

  listar = async () => {
    return Array.from(this.#sensores.values());
  };
}

export default SensorDao;
