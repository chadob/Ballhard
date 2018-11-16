const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;
let UserSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    username: String,
    password: String,
    picture: String,
    recentSearches: [String],
    favoriteVideos: [String],
    ratings: mongoose.Mixed
  }
)
UserSchema.methods.favoriteVideo = function(videoId) {
  let idx = this.favoriteVideos.indexOf(videoId)
  console.log(idx)
  idx < 0 ? this.favoriteVideos.push(videoId) : this.favoriteVideos.splice(idx, 1);
  return this.save()
}
UserSchema.methods.rateVideo = function(videoId, rating) {
  console.log(videoId)
  console.log(typeof rating)
  console.log(this.ratings)
  this.ratings[videoId] = rating
  this.markModified('ratings')
  console.log(this.ratings[videoId])
  return this.save()
}
UserSchema.methods.search = function (search) {
  console.log(this.recentSearches);
  this.recentSearches.splice(0,0,search)
  this.recentSearches.pop();
  console.log(this.recentSearches);
}
module.exports = mongoose.model('User', UserSchema, 'Users')
