const express = require('express');

const { crearPublicacion, eliminarPublicacion } = require('../controllers/publicaciones');

const router = express.Router();

router.post('', crearPublicacion);

router.delete('/:id', eliminarPublicacion);

module.exports = router;
