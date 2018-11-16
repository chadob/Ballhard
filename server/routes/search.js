const searchcontroller = require('./../controllers/search.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
    /**
     * get all searchs
     */
    router
        .route('/searches')
        .get(searchcontroller.fetchAllSearches)
    /**
     * add an search
     */
    router
        .route('/search/:id')
        .post(multipartWare, searchcontroller.search)
}
