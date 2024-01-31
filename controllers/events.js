const { response } = require("express");
const Evento = require("../models/Evento");

const getEventos = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "getEventos",
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }

  return res.json({
    ok: true,
    msg: "crearEvento",
  });
};

const actualizarEvento = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "actualizarEvento",
  });
};

const eliminarEvento = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento };
