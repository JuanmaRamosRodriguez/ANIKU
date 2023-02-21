const express = require('express');

const { rootController } = require('../controllers');
const usuarioRouter = require('./usuario');

const router = express.Router();

router.post('/', rootController);
router.use('/usuarios', usuarioRouter);

module.exports = router;
