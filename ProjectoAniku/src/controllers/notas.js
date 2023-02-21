const fs = require('fs');

const notaServices = require('../services/notas');

function crearNota(req, res) {
  const { nombre, contenido } = req.body;
  const CrearNota = notaServices.crearNota(nombre, contenido);
  return res.status(200).send(CrearNota);
}

function editarNota(req, res) {
  const { nombre } = req.params;
  const { contenido } = req.body;
  const EditarNota = notaServices.editarNota(nombre, contenido);
  return res.status(200).send(EditarNota);
}

function eliminarNota(req, res) {
  const { nombre } = req.params;
  const EliminarNota = notaServices.eliminarNota(nombre);
  return res.status(200).send(EliminarNota);
}

module.exports = {
  crearNota,
  editarNota,
  eliminarNota,
};
