const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport')
const path = require('path')

const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');

const dbRoute = require('./config/keys').mongoURI
require('./config/passport')(passport)

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(passport.initialize())
const router = express.Router();

// this is our MongoDB database
// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true , useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// append /api for our http requests
// app.use('/api', router);
app.use('/api', productsRouter);
app.use('/api', userRouter);

//Serve static assets if in production
if (process.env.NODE_ENV==='production'){
//  set static folder
  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
  })
}

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
