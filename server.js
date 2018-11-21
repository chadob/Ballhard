/** require dependencies */
const express = require("express")
const path = require('path');
const routes = require('./server/routes/')
const mongoose = require('mongoose').set('debug', true);
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()
const user = process.env.BallHardUser;
const pass = encodeURIComponent(process.env.BallHardPass);
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

console.log(path.join(__dirname, '/'))
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));


let port = process.env.PORT || 5000
console.log(port)

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())

//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
