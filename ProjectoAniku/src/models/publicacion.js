const { Schema, model } = require('mongoose');

const publicacionSchema = new Schema({
  id: { type: String, unique: true, required: true },
  image: { type: String, required: true },
  title: { type: Number, required: true },
  description: { type: String, required: true },
  like: { type: Number, required: true },
});

module.exports = model('Publicaciones', publicacionSchema);
