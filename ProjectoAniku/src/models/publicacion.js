const { Schema, model } = require('mongoose');

const publicacionSchema = new Schema({
  id: { type: String, unique: true, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, required: true, default: 0 },
  comments: { type: String, required: true },
});

module.exports = model('Publicaciones', publicacionSchema);
