const router = require('express').Router();
let Customer = require('../models/customer');

router.route('/').get( (req, res) => {
	Customer.find()
		.then(cusomers => res.json(cusomers))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( (req, res) => {
	const first_name = req.body.customer.first_name;
	const last_name = req.body.customer.last_name;
	const email = req.body.customer.email;
	const login = req.body.customer.login;
	const password = req.body.password;

	const newCustomer = new Customer({
		first_name,
		last_name,
		email,
		login,
		password,
	});

	newCustomer.save()
		.then( () => res.json('Customer added!'))
		.catch( err => res.status(400).json('Error: ' + err))
});

module.exports = router;