const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  telephone: { type: Number, unique: true, required: true },
  password: { type: String, unique: true, required: true },
});

module.exports = model('User', usuarioSchema);
