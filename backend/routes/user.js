const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const keys = require('')
// const passport = require('passport');

const validateRegisterInput = require('../validation/register');
// const validateLoginInput = require('../validation/login')

const User = require('../shemas/user');

router.post('/register', (req, res) => {

	const {errors, isValid} = validateRegisterInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({email: req.body.email})
		.then(user => {
			if (user) {
				return res.status(400).json({email: 'Email already exists'})
			} else {
				const newUser = new User({
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: req.body.password,
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err))
					})
				})
			}

		})
});

module.exports = router;