const usercontroller = require('./../controllers/user.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
    /**
     * get all users
     */
    router
      .route('/users')
      .get(usercontroller.fetchAllUsers)
    /**
     * add an user
     */
    router
      .route('/user')
      .post(multipartWare, usercontroller.addUser)

    //Get user data from database
    router
      .route('/user/getuser/:username')
      .get(usercontroller.getUser)

    //Update the user's searches
    router
      .route('/user/search/:search')
      .post(usercontroller.search)

    //favorite a video
    router
      .route('/user/favorite/:id')
      .post(usercontroller.favoriteVideo)

    //Rate a video
    router
      .route('/user/rate/:id')
      .post(usercontroller.rateVideo)
}
