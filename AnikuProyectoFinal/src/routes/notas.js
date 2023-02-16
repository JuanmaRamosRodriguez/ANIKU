const { application } = require('express');
const express = require('express');

const { crearNota, editarNota, eliminarNota } = require('../controllers/notas');

const router = express.Router();

router.post('/', crearNota);
router.put('/:nombre', editarNota);
router.delete('/:nombre', eliminarNota);

module.exports = router;
