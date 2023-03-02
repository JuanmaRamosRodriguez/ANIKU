const express = require('express');

const { rootController } = require('../controllers');
const usuarioRouter = require('./usuario');
const publicacionRouter = require('./publicacion');

const router = express.Router();

router.post('/', rootController);
router.use('/usuarios', usuarioRouter);
router.use('/publicacion', publicacionRouter);

module.exports = router;
