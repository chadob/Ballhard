const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;
let VideoSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    section: String,
    title: String,
    authorPic: String,
    author: String,
    rating: Number,
    totalRatings: Number,
    description: String,
    url: String,
    commentOrder: [String]
  },
  {collection: 'Videos'}
);
VideoSchema.methods.rate = function(newRating) {
  this.rating = (this.totalRatings * this.rating + newRating) / (this.totalRatings + 1);
  this.totalRatings++;
  return this.save()
}
VideoSchema.methods.view = function() {
  this.views++;
  return this.save()
}

module.exports = mongoose.model('Video', VideoSchema)
