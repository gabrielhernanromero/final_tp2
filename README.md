# Final TP2 — Sistema de monitoreo de sensores IoT

Backend RESTful (Node.js + Express) para recibir, almacenar y procesar lecturas de sensores IoT (TEMPERATURA, HUMEDAD, CO2), detectando alertas por umbral.

## Instalar y correr

```
npm install
npm start
```

Servidor en `http://localhost:3000`.

## Arquitectura

```
router/       → define las rutas y las conecta al controller
controller/   → adapta HTTP (req/res) e invoca los casos de uso
casosDeUso/   → lógica de negocio (procesar lectura, listar sensores, listar alertas)
Dao/          → persistencia en memoria (SensorDao, AlertaDao)
models/       → Sensor, Lectura
factories/    → arma e inyecta las dependencias, expone el controller al router
middleware/   → logger, validación de lecturas, manejo de errores y 404
```

## Endpoints

### POST /lecturas
Recibe una lectura y crea o actualiza el sensor.

```json
{
  "id": "SEN4A9X1",
  "tipo": "TEMPERATURA",
  "valor": 32.5,
  "timestamp": "2025-12-01T18:30:00Z"
}
```

Validaciones: `id` (8 caracteres alfanuméricos), `tipo` (`TEMPERATURA` | `HUMEDAD` | `CO2`), `valor` (número), `timestamp` (string).

Responde 201 si el sensor es nuevo, 200 si ya existía. Incluye `alerta` (mensaje o `null`).

### GET /sensores
Lista todos los sensores con su última lectura.

### GET /alertas
Lista las alertas generadas por los sensores registrados.

## Umbrales de alerta

| Tipo | Condición |
|------|-----------|
| TEMPERATURA | valor > 35 |
| HUMEDAD | valor < 20 |
| CO2 | valor > 1000 |

Ante un error, el servidor responde con `{ "errorMsg": "..." }` y el código HTTP correspondiente.
