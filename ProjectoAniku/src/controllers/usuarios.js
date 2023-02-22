const fs = require('fs');

const usuarioServices = require('../services/usuario');

async function crearUsuario(req, res) {
  const CrearUsuario = await usuarioServices.crearUsuario(req.body);
  return res.status(200).send(CrearUsuario);
}

async function editarUsuario(req, res) {
  try {
    const EditarUsuario = await usuarioServices.editarUsuario(req.params.id, req.body);
    return res.status(200).send(EditarUsuario);
  } catch (error) {
    console.error(`Ha ocurrido un error al editar el usuario con ID ${req.params.id}: ${error}`);
    return res.status(500).send('Ha ocurrido un error al editar el usuario');
  }
}

async function eliminarUsuario(req, res) {
  try {
    const EliminarUsuario = await usuarioServices.eliminarUsuario(req.params.id);
    return res.status(200).send(EliminarUsuario);
  } catch (error) {
    console.error(`Error al eliminar usuario con ID ${req.params.id}: ${error}`);
    return res.status(500).send('Error al eliminar usuario');
  }
}

module.exports = {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};

/* Id CLIENTE:  1449171834-3gsrps9fi891j1c2a1afk2rdduclvg3r.apps.googleusercontent.com */
/* Secreto del CLIENTE:  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 */
