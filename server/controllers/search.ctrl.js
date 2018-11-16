/** server/controllers/video.ctrl.js*/
const Search = require('./../models/Search')
const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')
const url = "http://localhost:5000/api/";
const mongoose = require('mongoose')
console.log(Search);

module.exports = {
  fetchAllSearches(req, res, next) {
    Search.find()
    .exec((err, searches)=> {
      if (err)
        res.send(err)
      else if (!searches)
        res.send(404)
      else
        res.send(searches)
      next()
    });
  },

    /**
     * searches_id
     */
 search: (req, res, next) => {
   console.log(req);
   Search.findOne({"name": req.params.id})
   .exec((err, searches) => {
      if (err) {
        res.send(err)
      }
      else if (!searches) {
        console.log('else if ran')
        let curSearch = req.params.id
        Search.create({'name': curSearch, 'searches': 1, _id: new mongoose.Types.ObjectId()} , (err, search) => {
          if (err) {
            console.log(err)
          }
        });
      }
      else {
        console.log('else ran')
        searches.searches++
        searches.save(function (err) {
          if(err) {
           console.error('ERROR!');
          }
        });
        res.send(searches)
      }
      next()
    })
  }
}
