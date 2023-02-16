const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  id: { type: String, unique: true, required: true },
  user_id: { type: String, unique: true, required: true },
  photo: { type: String, unique: true, required: true },
  description: { type: String, unique: true },
});

module.exports = model('post', postSchema);
