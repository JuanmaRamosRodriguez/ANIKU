const { Schema, model } = require('mongoose');

const comentarioSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = model('Comentarios', comentarioSchema);
