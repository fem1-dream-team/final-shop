const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport')

const Product = require('./shemas/product');
const userRouter = require('./routes/user');
const dbRoute = require('./config/keys').mongoURI
require('./config/passport')(passport)

const API_PORT = 3001;
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

router.get('/getData/category/:categoryName', (req, res) => {
	console.log("categoryName back: " + req.params.categoryName)
	Product.find({ category: req.params.categoryName}, function (err, data) {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

router.get('/search', (req, res) => {
	const q = req.query.q;
	Product.find({ $text: { $search: q }}, function (err, data) {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

router.get('/getData/:productId', (req, res) => {
	// console.log(req)
	const productId = req.params.productId;
	console.log('q is ' + productId)
	Product.findOne({ _id: productId }, function (err, data) {
		console.log('res.data: '+ res.data)
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

router.get('/updateData', (req, res) => {
	const { id, update } = req.body;
	Data.findByIdAndUpdate(id, update, (err) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
	const { id } = req.body;
	Data.findByIdAndRemove(id, (err) => {
		if (err) return res.send(err);
		return res.json({ success: true });
	});
});

// this is our create method
// this method adds new data in our database
router.post('/putData', (req, res) => {
	let data = new Data();
	const { id, message } = req.body;
	if ((!id && id !== 0) || !message) {
		return res.json({
			success: false,
			error: 'INVALID INPUTS',
		});
	}
	data.message = message;
	data.id = id;
	data.save((err) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// Add new user
app.use('/api', userRouter);

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
