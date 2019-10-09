const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')
// const passport = require('passport');
const jsonParser = express.json();

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login')

const User = require('../shemas/user');

// POST '/api/register' to create new user
router.post('/register', (req, res) => {

	// is form valid?
	const {errors, isValid} = validateRegisterInput(req.body);

	if (!isValid) { return res.status(400).json(errors) }

	User.findOne({email: req.body.email})
		.then (user => {
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
							.then (user => res.json(user))
							.catch (err => console.log(err))
					})
				})
			}

		})
});

// POST 'api/login' to login user and return JWT token
router.post('/login', (req, res) => {

	//is form valid?
	const { errors, isValid } = validateLoginInput(req.body);
	console.log(req.body);
	if (!isValid) { return res.status(400).json(errors) }

//	let's find user by email and check if password matches
	const email = req.body.email
	const password = req.body.password

	User.findOne({ email })
		.then (user => {
			if (!user) {
				return res.status(400).json({ email: 'Email not found'})
			}

			bcrypt.compare(password, user.password)
				.then (isMatch => {
					if (isMatch) {
						const payload = {
							id: user._id,
							first_name: user.first_name,
							last_name: user.last_name,
							email: user.email,
							tel: user.tel,
							birth: user.birth,
							sex: user.sex,
							adress: user.adress,
							}

						jwt.sign(
							payload,
							keys.secretOrKey,
							{expiresIn: 900},
							(err, token) => {
								res.json({ success: true, token: 'Bearer' + token })
							}
							)
					} else {
						return res.status(400).json({ password: "Wrong password. Try again" })
					}
				})
				.catch (err => console.log(err))
		})
})


router.put('/edit',jsonParser, (req, res) => {

	if(!req.body) return res.sendStatus(400);
	const id = req.body.id
	const newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		tel: req.body.tel,
		birth: req.body.birth,
		sex: req.body.sex,
		adress: req.body.adress,
	};

	User.findOneAndUpdate({_id: id}, newUser, {new: true}, function(err, user){
		if(err) return console.log(err);
		const payload = {
			id: user._id,
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			tel: user.tel,
			birth: user.birth,
			sex: user.sex,
			adress: user.adress,
		}

		jwt.sign(
			payload,
			keys.secretOrKey,
			{expiresIn: 900},
			(err, token) => {
				res.json({ success: true, token: 'Bearer' + token })
			}
		)
		//res.send(user);
	})
});

module.exports = router;