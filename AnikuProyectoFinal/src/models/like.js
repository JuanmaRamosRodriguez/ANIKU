const { Schema, model } = require('mongoose');

const likeSchema = new Schema({
  id: { type: String, unique: true, required: true },
  user_id: { type: String, unique: true, required: true },
  post_id: { type: String, unique: true, required: true },
});

module.exports = model('like', likeSchema);
