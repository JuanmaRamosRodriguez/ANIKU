const { application } = require('express');
const express = require('express');

const { crearUsuario, editarUsuario, eliminarUsuario } = require('../controllers/notas');

const router = express.Router();

router.post('/', crearUsuario);
router.put('/:nombre', editarUsuario);
router.delete('/:nombre', eliminarUsuario);

module.exports = router;
