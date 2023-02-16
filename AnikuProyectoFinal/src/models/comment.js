const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  id: { type: String, unique: true, required: true },
  user_id: { type: String, unique: true, required: true },
  post_id: { type: String, unique: true, required: true },
  content: { type: String, unique: true, required: true },
});

module.exports = model('comment', commentSchema);
