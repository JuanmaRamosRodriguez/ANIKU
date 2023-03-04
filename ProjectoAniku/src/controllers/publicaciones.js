const fs = require('fs');

const publicacionServices = require('../services/publicacion');

async function crearPublicacion(req, res) {
  const archivo = req.file;
  const CrearPublicacion = await publicacionServices.createPublicacion(req.body, archivo);
  return res.status(201).send(CrearPublicacion);
}

async function eliminarPublicacion(req, res) {
  const { id } = req.params;
  const publicacionEliminada = await publicacionServices.eliminarPublicacion(id);
  return res.status(201).send(publicacionEliminada);
}

module.exports = {
  crearPublicacion,
  eliminarPublicacion,
};
