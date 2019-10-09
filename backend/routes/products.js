const express = require('express');
const router = express.Router();
const Product = require('../shemas/product');

router.get('/getData/yummy/:categoryName', (req, res) => {
	console.log("categoryName back: " + req.params.categoryName)
	const whatToFind = req.params.categoryName
	whatToFind === "sale" ?
		Product.find({ status: whatToFind}, function (err, data) {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: data });
		})
	:
	Product.find({ category: req.params.categoryName}, function (err, data) {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

router.get('/getData/yummy/detailed/:productId', (req, res) => {
	// console.log(req)
	const productId = req.params.productId;
	console.log('q is ' + productId)
	Product.findOne({ _id: productId }, function (err, data) {
		console.log('res.data: '+ res.data)
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

module.exports = router