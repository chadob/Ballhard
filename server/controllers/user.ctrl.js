const User = require('../models/user')
const Video = require('../models/video')
const mongoose = require('mongoose')

module.exports = {
    addUser: (req, res, next) => {
        new User({
          ...req.body,
          _id: new mongoose.Types.ObjectId(),
          picture: "primary_bg",
          recentSearches: [],
          favoriteVideos: [],
          ratings: {"dummy": 0}
        }).save((err, newUser) => {
            if (err)
                res.send(err)
            else if (!newUser)
                res.send(400)
            else
                res.send(newUser)
            next()
        });
    },
    fetchAllUsers: (req, res, next) => {
        User.find().then
        /*populate('following').exec*/((err, user)=> {
            if (err)
                res.send(err)
            else if (!user)
                res.send(404)
            else
                res.send(user)
            next()
        })
    },
    getUser: (req, res, next) => {
      User.findOne({"username": req.params.username, "password": req.query.password}).then
      /*populate('following').exec*/((err, user)=> {
        if (err)
          res.send(err)
        else if (!user)
          res.send(404)
        else {
          res.send(user)
        }
        next()
      })
    },
    search: (req, res, next) => {
      User.findOne({"_id": req.body.userId})
      .exec((err, user) => {
        if (err) {
          res.send(err)
        }
        else if (!user) {
          res.send(400)
        }
        else {
          user.search(req.params.search)
          user.save(function (err) {
            if(err) {
              console.error(err);
            }
          });
          res.send(user.recentSearches)
        }
        next()
      })
    },
    favoriteVideo: (req, res, next) => {
      User.findOne({"_id": req.body.userId})
      .exec((err, user) => {
        if (err) {
          console.log(err)
          res.send(err)
        }
        else if (!user) {
          console.log('user not found')
          res.send(400)
        }
        else {
          user.favoriteVideo(req.params.id)
          res.send(user.favoriteVideos)
        }
        next()
      })
    },
    //add users rating to the user's document
    // Recalculate the videos average rating
    rateVideo: (req, res, next) => {
      User.findOne({"_id": req.params.id})
      .exec((err, user) => {
        if (err) {
          res.send(err)
        }
        else if (!user) {
          console.log('err on user')
          res.send(400)
        }
        else {
          user.rateVideo(req.body.videoId, req.body.rating);
          Video.findOne({"_id": req.body.videoId})
          .exec((err, video) => {
            if (err) {
              res.send(err)
            }
            else if (!video) {
              console.log('err on video')
              res.send(400)
            }
            else {
              video.rate(req.body.rating);
              res.send(user.ratings)
            }
            next()
          })
        }
      })
    },
}
