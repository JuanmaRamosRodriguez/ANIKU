const fs = require('fs');
const { Usuario } = require('../models');

async function crearUsuario(user) {
  return new Usuario(user).save();
}

function editarUsuario(nombre, contenido) {
  fs.writeFile(`${nombre}.note`, contenido, err => {
    if (err) throw err;
  });
}

function eliminarUsuario(user) {
  return new Usuario(user).remove();
}

module.exports = {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
