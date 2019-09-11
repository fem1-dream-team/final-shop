const router = require ('express').Router();
let Product = require('../models/product');

router.route('/').get( (req, res) => {
	Product.find()
		.then(products => res.json(products))
		.catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post( (req, res) => {
	const name = req.body.name;
	const image = req.body.image;
	const category = req.body.category;
	const price = Number(req.body.price);
	const description = req.body.description;
	const status = req.body.status;

	const newProduct = new Product({
		name,
		image,
		category,
		price,
		description,
		status,
	});

	newProduct.save()
		.then( () => res.json('Product added!'))
		.catch( err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Product.findById(req.params.id)
		.then(product => res.json(product))
		.catch( err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete( (req, res) => {
	Product.findById(req.params.id)
		.then( () => res.json('Product deleted'))
		.catch( err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post( (req, res) => {
	Product.findById(req.params.id)
		.then(product => {
			product.name = req.body.name;
			product.image = req.body.image;
			product.category = req.body.category;
			product.price = Number(req.body.price);
			product.description = req.body.description;
			product.status = req.body.status;

			product.save()
				.then( () => res.json('Product updated'))
				.catch( err => res.status(400).json('Error: ' + err))
		});
})

module.exports = router;