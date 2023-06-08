const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    req.session.usuarioId = usuario._id;

    return res.status(200).json({ message: 'Has iniciado sesión correctamente!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
}

module.exports = {
  login,
};
