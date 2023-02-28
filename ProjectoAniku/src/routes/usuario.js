const express = require('express');

const { crearUsuario, editarUsuario, eliminarUsuario } = require('../controllers/usuarios');
const { crearPublicacion, eliminarPublicacion } = require('../services/publicacion');

const router = express.Router();

router.post('', crearUsuario);
router.post('', crearPublicacion);

router.put('/:id', editarUsuario);
router.delete('/:id', eliminarUsuario);
router.delete('/:id', eliminarPublicacion);

module.exports = router;
