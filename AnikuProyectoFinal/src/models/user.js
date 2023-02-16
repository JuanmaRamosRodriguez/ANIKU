const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  tel: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
});

module.exports = model('user', userSchema);
