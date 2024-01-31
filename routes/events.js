/* 
  Rutas de Eventos
  host + /api/events
*/

const { Router } = require("express");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");

//Obtener eventos
//Rutas deben tener validaciones
const router = Router();

router.get("/", validarJWT, getEventos);
router.post("/", validarJWT, crearEvento);
router.put("/:id", validarJWT, actualizarEvento);
router.delete("/:id", validarJWT, eliminarEvento);

module.exports = router;
