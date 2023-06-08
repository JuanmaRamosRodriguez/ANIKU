const express = require('express');
const { upload } = require('../middleware/multer');
const { crearPublicacion, eliminarPublicacion } = require('../controllers/publicaciones');

const router = express.Router();
router.post('', upload.single('fotos'), crearPublicacion);
router.delete('/:id', eliminarPublicacion);

module.exports = router;
