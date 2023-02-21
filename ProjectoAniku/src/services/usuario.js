const fs = require('fs');
const { Usuario } = require('../models');

async function crearUsuario(user) {
  return new Usuario(user).save();
}

function editarNota(nombre, contenido) {
  fs.writeFile(`${nombre}.note`, contenido, err => {
    if (err) throw err;
  });
}

function eliminarNota(nombre) {
  fs.unlink(`${nombre}.note`, err => {
    if (err) throw err;
  });
}

module.exports = {
  crearUsuario,
  editarNota,
  eliminarNota,
};
