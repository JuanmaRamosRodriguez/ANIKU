const fs = require('fs');

const publicacionServices = require('../services/publicacion');

async function crearPublicacion(req, res) {
  const CrearPublicacion = await publicacionServices.crearPublicacion(req.body);
  return res.status(200).send(CrearPublicacion);
}

async function eliminarPublicacion(req, res) {
  try {
    const EliminarPublicacion = await publicacionServices.eliminarPublicacion(req.params.id);
    return res.status(200).send(EliminarPublicacion);
  } catch (error) {
    console.error(`Error al eliminar usuario con ID ${req.params.id}: ${error}`);
    return res.status(500).send('Error al eliminar usuario');
  }
}

module.exports = {
  crearPublicacion,
  eliminarPublicacion,
};
