const { Schema, model } = require('mongoose');

const publicacionSchema = new Schema({
  id: { type: String, required: true },
  image: { type: String, required: true },
  like: { type: Number, unique: true, required: true },
});

module.exports = model('Publicaciones', publicacionSchema);
