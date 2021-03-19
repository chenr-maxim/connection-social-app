const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  username: String,
  body: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    }
  ],
  likes: [
    {
      username: String,
      createdAt: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;