const { Login } = require('../models');

async function iniciarSesion(credentials) {
  const { email, password } = credentials;
  const usuario = await Login.findOne({ email, password });

  return usuario;
}

module.exports = {
  iniciarSesion,
};
