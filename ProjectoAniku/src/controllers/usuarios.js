const fs = require('fs');

const usuarioServices = require('../services/usuario');

async function crearUsuario(req, res) {
  const CrearUsuario = await usuarioServices.crearUsuario(req.body);
  return res.status(200).send(CrearUsuario);
}

function editarUsuario(req, res) {
  const { nombre } = req.params;
  const { contenido } = req.body;
  const EditarUsuario = usuarioServices.editarUsuario(nombre, contenido);
  return res.status(200).send(EditarUsuario);
}

function eliminarUsuario(req, res) {
  const { nombre } = req.params;
  const EliminarUsuario = usuarioServices.eliminarUsuario(nombre);
  return res.status(200).send(EliminarUsuario);
}

module.exports = {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
