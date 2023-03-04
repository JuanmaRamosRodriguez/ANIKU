const fs = require('fs');
const { Publicacion } = require('../models');

async function createPublicacion(publicationData, archivo) {
  const data = { ...publicationData, image: archivo.originalname };
  const createdPublicacion = await Publicacion.create(data);
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
