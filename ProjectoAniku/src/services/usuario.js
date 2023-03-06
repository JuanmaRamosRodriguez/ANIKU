/* eslint-disable object-shorthand */
const { ObjectId } = require('mongodb');
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
  const usuarioBorrado = await Usuario.findByIdAndDelete(new ObjectId(id));
  return usuarioBorrado;
}

module.exports = {
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
