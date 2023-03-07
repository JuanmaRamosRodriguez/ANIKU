const { ObjectId } = require('mongodb');
const fs = require('fs');
const { Publicacion } = require('../models');

async function createPublicacion(publicationData, archivo) {
  const data = { ...publicationData, image: archivo.originalname };
  const createdPublicacion = await Publicacion.create(data);
  return createdPublicacion;
}

async function eliminarPublicacion(id) {
  const publicacionBorrada = await Publicacion.findByIdAndDelete(new ObjectId(id));
  return publicacionBorrada;
}

module.exports = {
  createPublicacion,
  eliminarPublicacion,
};
