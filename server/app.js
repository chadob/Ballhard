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
const user = process.env.BallHardUser;
const pass = encodeURIComponent(process.env.BallHardPass);
console.log(process.env)
console.log(user);
console.log(pass);
const url = `mongodb+srv://${user}:${pass}@ballhard-t4bnn.mongodb.net/BallHard?retryWrites=true`
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
