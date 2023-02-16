const fs = require('fs');

function crearNota(nombre, contenido) {
  fs.writeFile(`${nombre}.note`, contenido, err => {
    if (err) throw err;
  });
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
  crearNota,
  editarNota,
  eliminarNota,
};
