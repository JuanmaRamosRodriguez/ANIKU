const { Schema, model } = require('mongoose');

const comentarioSchema = new Schema({
  id: { type: String, unique: true, required: true },
  comment: { type: String, required: true },
});

module.exports = model('Comentarios', comentarioSchema);
