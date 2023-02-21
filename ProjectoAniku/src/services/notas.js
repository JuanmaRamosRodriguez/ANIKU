const fs = require('fs');

function crearUsuario(nombre, contenido) {
  fs.writeFile(`${nombre}.note`, contenido, err => {
    if (err) throw err;
  });
}

function editarUsuario(nombre, contenido) {
  fs.writeFile(`${nombre}.note`, contenido, err => {
    if (err) throw err;
  });
}

function eliminarUsuario(nombre) {
  fs.unlink(`${nombre}.note`, err => {
    if (err) throw err;
  });
}

module.exports = {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
