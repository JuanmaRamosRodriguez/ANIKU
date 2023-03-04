const express = require('express');

const { rootController } = require('../controllers');
const usuarioRouter = require('./usuario');
const fotosRouter = require('./fotos');

const router = express.Router();

router.post('/', rootController);
router.use('/usuarios', usuarioRouter);
router.use('/fotos', fotosRouter);

module.exports = router;
