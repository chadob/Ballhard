const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

let CommentSchema = new mongoose.Schema(
  {
    author: String,
    src: String,
    video: String,
    comment: String,
    date: String,
    _id: ObjectId,
  },
  {collection: 'Comments'}
);

module.exports = mongoose.model('Comment', CommentSchema)
