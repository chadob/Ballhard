// server/routes/video.js
const videocontroller = require('./../controllers/video.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
  /**
   * get all videos
   */
  router
    .route('/videos')
    .get(videocontroller.fetchAllVideos)
  /**
   * comment on an video
   */
  router
    .route('/video/comment/:id')
    .post(videocontroller.commentVideo)
  /**
   * get a video to view
   */
  router
    .route('/video/get/:id')
    .get(videocontroller.getVideo)

  //get all comments for video from database
  router
    .route('/comments/:id')
    .get(videocontroller.getComments)
}
