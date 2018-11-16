// server/routes/index.js
const user = require('./user')
const video = require('./video')
const search = require('./search')
module.exports = (router) => {
    user(router)
    video(router)
    search(router)
}
