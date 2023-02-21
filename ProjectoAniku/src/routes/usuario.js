const express = require('express');

const { crearUsuario, editarUsuario, eliminarUsuario } = require('../controllers/usuarios');

const router = express.Router();

router.post('', crearUsuario);

router.put('/:nombre', editarUsuario);
router.delete('/:nombre', eliminarUsuario);

module.exports = router;
