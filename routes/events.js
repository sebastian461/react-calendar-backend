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
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

//Rutas deben tener validaciones JWT
router.use(validarJWT);

router.get("/", getEventos);
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio").custom(isDate),
    check("end", "Fecha de finialización es obligatorio").custom(isDate),
    validarCampos,
  ],
  crearEvento
);
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio").custom(isDate),
    check("end", "Fecha de finialización es obligatorio").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);
router.delete("/:id", eliminarEvento);

module.exports = router;
