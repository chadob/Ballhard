const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;
let SearchSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    name: String,
    searches: Number
  },
  {collection: 'Searches'},
  { strict: false }
);

module.exports = mongoose.model('Search', SearchSchema)
