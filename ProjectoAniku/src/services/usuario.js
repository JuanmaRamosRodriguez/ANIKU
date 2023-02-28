/* eslint-disable object-shorthand */
const fs = require('fs');
const { Usuario } = require('../models');

async function crearUsuario(user) {
  return new Usuario(user).save();
}

async function editarUsuario(body) {
  const { id, ...datos } = body;
  const updatedUser = await Usuario.findOneAndUpdate({ id }, datos);
  return updatedUser;
}

async function eliminarUsuario(id) {
  const { identificador } = { id: id };
  const EliminarUsuario = await Usuario.deleteOne(identificador);
  return EliminarUsuario;
}

module.exports = {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
