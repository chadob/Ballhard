/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose').set('debug', true);
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
const user = 'chado';
const pass = encodeURIComponent("Jerryrice#80");

const url = `mongodb+srv://chado:${pass}@ballhard-t4bnn.mongodb.net/BallHard?retryWrites=true`
/** configure cloudinary */
cloudinary.config({
    cloud_name: 'YOUR_CLOUDINARY_NAME_HERE',
    api_key: 'YOUR_CLOUDINARY_API_KEY_HERE',
    api_secret: 'YOUR_CLOUDINARY_API_SECRET_HERE'
})

/** connect to MongoDB datastore */
mongoose.connect(url, {useNewUrlParser: true}).then(
  ()=> {
    console.log('success');
  },
  (err) => {
    console.log(err);
  }
);

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
