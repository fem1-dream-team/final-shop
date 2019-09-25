const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
	const errors = {};

	// Convert empty fields to an empty string so we can use validator functions
	data.first_name = isEmpty(data.first_name) ? "" : data.first_name;
	data.last_name = isEmpty(data.last_name) ? "" : data.last_name ;
	data.email = isEmpty(data.email) ? "" : data.email ;
	data.password = isEmpty(data.password) ? "" : data.password;
	data.confirm_password = isEmpty(data.confirm_password) ? "" : data.confirm_password;

	// First name check
	if (Validator.isEmpty(data.first_name)) {
		errors.first_name = "Please enter your firs name"
	}

	// Last name check
	if (Validator.isEmpty(data.last_name)) {
		errors.last_name = "Please enter your last name"
	}

	// Email check
	if (Validator.isEmpty(data.email)) {
		errors.email = 'Please, enter your email'
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Please, enter your email correctly'
	}

	// Passwords check
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Please, enter your password'
	}
	if (!Validator.isLength(data.password, {min: 8, max: 30})) {
		errors.password = 'Password must be at least 8 characters long'
	}

	if (Validator.isEmpty(data.confirm_password)) {
		errors.confirm_password = 'Please, confirm your password'
	}
	if (!Validator.equals(data.password, data.confirm_password)){
		errors.confirm_password = 'Passwords should match'
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
};