const { Schema, model } = require('mongoose');

const publicacionSchema = new Schema({
  image: { type: String },
  description: { type: String, required: true },
  likes: { type: Number, required: true },
  comments: { type: String },
});

module.exports = model('Publicaciones', publicacionSchema);
