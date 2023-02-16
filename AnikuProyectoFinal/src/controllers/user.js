const fs = require('fs');

const notaServices = require('../services/user');

function crearUsuario(req, res) {
  const { nombre, contenido } = req.body;
  const crearUsuario = notaServices.crearUsuario(nombre, contenido);
  return res.status(200).send(crearUsuario);
}
/*
function editarNota(req, res) {
  const { nombre } = req.params;
  const { contenido } = req.body;
  const EditarNota = notaServices.editarNota(nombre, contenido);
  return res.status(200).send(EditarNota);
}
*/

function eliminarUsuario(req, res) {
  const { nombre } = req.params;
  const EliminarUsuario = userServices.eliminarUsuario(nombre);
  return res.status(200).send(EliminarUsuario);
}

module.exports = {
  crearUsuario,
  eliminarUsuario,
};
