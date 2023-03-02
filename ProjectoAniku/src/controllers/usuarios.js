/* eslint-disable max-len */
const fs = require('fs');

const usuarioServices = require('../services/usuario');

async function crearUsuario(req, res) {
  const CrearUsuario = await usuarioServices.crearUsuario(req.body);
  return res.status(201).send(CrearUsuario);
}

async function editarUsuario(req, res) {
  const EditarUsuario = await usuarioServices.editarUsuario(req.body);
  return res.status(201).send(EditarUsuario);
}

async function eliminarUsuario(req, res) {
  const { id } = req.params;
  const EliminarUsuario = await usuarioServices.eliminarUsuario(id);
  return res.status(201).send(EliminarUsuario);
}

module.exports = {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
