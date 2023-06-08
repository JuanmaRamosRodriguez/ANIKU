const express = require('express');
const authController = require('../controllers/login');

const { rootController } = require('../controllers');
const usuarioRouter = require('./usuario');
const fotosRouter = require('./fotos');

const router = express.Router();

router.post('/', rootController);
router.use('/usuarios', usuarioRouter);
router.use('/fotos', express.static('fotos'), fotosRouter);
router.post('/login', authController.login);

module.exports = router;
