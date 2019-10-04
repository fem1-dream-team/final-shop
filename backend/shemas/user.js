// /backend/product.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

// this will be our data base's data structure
const UserSchema = new Schema({
		id: ObjectId,
		first_name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		tel: {
			type: String,
			required: true
		},
		birth: {
			type: String,
			required: true
		},
		sex: {
			type: String,
			required: true
		},
		adress: {
			type: String,
			required: true
		},
	},

	{collection: 'customers'}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);