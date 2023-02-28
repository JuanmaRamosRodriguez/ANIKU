const fs = require('fs');

const publicacionServices = require('../services/publicacion');

async function crearPublicacion(req, res) {
  const CrearPublicacion = await publicacionServices.crearPublicacion(req.body);
  return res.status(200).send(CrearPublicacion);
}

async function eliminarPublicacion(req, res) {
  const { id } = req.params;
  const EliminarPublicacion = await publicacionServices.eliminarPublicacion(id);
  return res.status(200).send(EliminarPublicacion);
}

module.exports = {
  crearPublicacion,
  eliminarPublicacion,
};
