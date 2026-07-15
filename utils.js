const UMBRALES = {
  TEMPERATURA: { excede: (valor) => valor > 35, mensaje: "TEMPERATURA alta" },
  HUMEDAD: { excede: (valor) => valor < 20, mensaje: "HUMEDAD baja" },
  CO2: { excede: (valor) => valor > 1000, mensaje: "CO2 alto" },
};

export const TIPOS_VALIDOS = Object.keys(UMBRALES);

export const evaluarAlerta = (tipo, valor) => {
  const umbral = UMBRALES[tipo];
  if (!umbral) return null;
  return umbral.excede(valor) ? umbral.mensaje : null;
};
