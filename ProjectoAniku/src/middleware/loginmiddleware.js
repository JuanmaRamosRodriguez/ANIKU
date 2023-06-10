const jwt = require('jsonwebtoken');
const Usuarios = require('../models/usuario');

const secret = 'admin';

const loginMiddleware = async (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.headers.authorization);
  const token1 = req.headers.authorization;

  if (token1 === undefined) {
    return res.status(401).json({ message: 'No se proporcionó el token para autentificar.' });
  }
  const token = req.headers.authorization.substring(7);

  try {
    const decodedToken = jwt.verify(token, secret);

    const usuarios = await Usuarios.findById(decodedToken.usuariosId);

    if (!usuarios) {
      return res.status(401).json({ message: 'Usuario no registrado.' });
    }

    req.usuarios = usuarios;

    return next();
  } catch (err) {
    return res.status(401).send({ message: 'El token de autenticación no es válido.' });
  }
};

module.exports = {
  loginMiddleware,
};
