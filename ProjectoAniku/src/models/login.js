const { Schema, model } = require('mongoose');

const loginSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

module.exports = model('Login', loginSchema);
