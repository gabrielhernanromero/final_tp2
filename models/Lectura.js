class Lectura {
  constructor({ id, tipo, valor, timestamp, alerta = null }) {
    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
    this.timestamp = timestamp;
    this.alerta = alerta;
  }
}

export default Lectura;
