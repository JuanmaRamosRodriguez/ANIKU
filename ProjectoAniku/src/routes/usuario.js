const express = require('express');

const { crearUsuario, editarUsuario, eliminarUsuario } = require('../controllers/usuarios');

const router = express.Router();

router.post('', crearUsuario);

router.put('/:id', editarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;
