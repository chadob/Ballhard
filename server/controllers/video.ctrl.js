/** server/controllers/video.ctrl.js*/
const Video = require('./../models/Video')
const Comment = require('./../models/Comment')
const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')
const url = "http://localhost:5000/api/";
const mongoose = require('mongoose')

module.exports = {
  fetchAllVideos(req, res, next) {
    Video.find()
    .exec((err, videos)=> {
      if (err) {
        console.log(err)
        res.send(err)
      }
      else if (!videos) {
        console.log('else if ran')
        res.send(404)
      }
      else {
        console.log(videos);
        res.send(videos)
      }
      next()
    });
  },
    /**
     Add comment to comments collection
     Add its id to the video's commentOrder array
     */
    commentVideo: (req, res, next) => {
      new Comment({
        ...req.body,
        _id: new mongoose.Types.ObjectId()
      }).save((err, comment) => {
        if (err) {
          res.send(err)
        }
        else if (!comment)
          res.send(400)
        else {
          Video.findById(req.params.id)
          .exec((err, video) => {
            if (err) {
              res.send(err)
            }
            else if (!video)
            res.send(404)
            else {
              video.commentOrder.push(comment._id)
              video.save(function (err) {
                if (err) {
                  console.log(err)
                }
              })
              res.send(comment)
            }
            next()
          })
        }
      });
    },
    /**
     * video_id
     */
    getVideo: (req, res, next) => {
      Video.findById(req.params.id)
      .exec((err, video)=> {
        if (err)
          res.send(err)
        else if (!video)
          res.send(404)
        else
          res.send(video)
        next()
      })
    },
    getComments: (req, res, next) => {
      Comment.find({"video": req.params.id})
      .exec((err, comments)=> {
        if (err) {
          console.log(err)
          res.send(err)
        }
        else if (!comments) {
          console.log('else if ran')
          res.send(404)
        }
        else {
          console.log(comments);
          res.send(comments)
        }
        next()
      });
    }
}
