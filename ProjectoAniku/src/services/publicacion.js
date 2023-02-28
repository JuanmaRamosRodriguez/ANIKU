const fs = require('fs');
const { Publicacion } = require('../models');

async function crearPublicacion(publication) {
  return new Publicacion(publication).save();
}

async function eliminarPublicacion(id) {
  const { identificador } = { id };
  const EliminarPublicacion = await Publicacion.deleteOne(identificador);
  return EliminarPublicacion;
}

module.exports = {
  crearPublicacion,
  eliminarPublicacion,
};
