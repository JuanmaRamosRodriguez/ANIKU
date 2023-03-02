const fs = require('fs');
const { Publicacion } = require('../models');

async function createPublicacion(body) {
  const createdPublicacion = await new Publicacion(body).save();
  return createdPublicacion;
}

async function eliminarPublicacion(id) {
  // eslint-disable-next-line object-shorthand
  const identificador = { id };
  const publicacionEliminada = await Publicacion.deleteOne(identificador);
  return publicacionEliminada;
}

module.exports = {
  createPublicacion,
  eliminarPublicacion,
};
