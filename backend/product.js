// /backend/product.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// this will be our data base's data structure
const ProductSchema = new Schema(
	{
		id: ObjectId,
		name: String,
		image: String,
		category: String,
		price: String,
		description: String,
		status: String
	},
	{ collection : 'products' }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Product", ProductSchema);