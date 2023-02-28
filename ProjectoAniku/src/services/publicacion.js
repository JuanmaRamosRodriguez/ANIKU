const fs = require('fs');
const { Publicacion } = require('../models');

async function crearPublicacion(publication) {
  return new Publicacion(publication).save();
}

function eliminarPublicacion(user) {
  return new Publicacion(user).remove();
}

module.exports = {
  crearPublicacion,
  eliminarPublicacion,
};
