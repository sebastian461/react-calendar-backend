/* 
  Rutas de Usuarios /auth
  host + /api/auth
*/

const { Router } = require("express");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const router = Router();

router.post("/new", crearUsuario);

router.post("/", loginUsuario);

router.get("/renew", revalidarToken);

module.exports = router;
