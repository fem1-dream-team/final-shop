const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
	first_name: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
	last_name: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
	login: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minLength: 4
	},
		password: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minLength: 8
	},
}, {
	timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;