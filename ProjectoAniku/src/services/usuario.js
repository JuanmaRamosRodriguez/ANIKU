/* eslint-disable object-shorthand */
const { ObjectId } = require('mongodb');
const fs = require('fs');
const { Usuario } = require('../models');

async function crearUsuario(body) {
  return new Usuario(body).save();
}

async function editarUsuario(body) {
  const { telephone, ...datos } = body;
  const usuarioEditado = await Usuario.findOneAndUpdate({ telephone }, datos);
  return usuarioEditado;
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
