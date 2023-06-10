const Usuarios = require('../models/usuario');

const loginMiddleware = async (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.headers.authorization);

  // Aquí puedes agregar tu lógica de autenticación sin token

  const usuarios = await Usuarios.findOne({ /* lógica de búsqueda del usuario */ });

  if (!usuarios) {
    return res.status(401).json({ message: 'Usuario no registrado.' });
  }

  req.usuarios = usuarios;

  return next();
};

module.exports = {
  loginMiddleware,
};
