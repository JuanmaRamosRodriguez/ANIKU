const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model('Usuarios', usuarioSchema);
