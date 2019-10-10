const initialState = {
	orders: [
		{
			creationDate: '2019-08-01',
			ordNo: '12345547',
			deliveryStatus: 'received',
			amount: '321 UAH',
			products: [
				{
					productId: '5d83547a1c9d44000012dec2',
					price: '385',
					image: 'img/products/cakes/1.jpg',
					name: 'Souffle cake',
					qty: '1',
				},
				{
					productId: '5d8363801c9d44000012ded0',
					price: '415',
					image: 'img/products/cakes/4.jpg',
					name: 'Strawberry cake',
					qty: '1',
				},

			]
		},
		{
			creationDate: '2019-09-08',
			ordNo: '12345237',
			deliveryStatus: 'received',
			amount: '321 UAH',
			products: [
				{
					productId: '5d7782041c9d4400006794b8',
					price: '75',
					image: 'img/products/cookies/32.jpg',
					name: 'Amerikaner',
					qty: '2',
				},
				{
					productId: '5d83574a1c9d44000012dec6',
					price: '285',
					image: 'img/products/cakes/2.jpg',
					name: 'Vanilla candy',
					qty: '2',
				},

			]
		},
		{
			creationDate: '2019-09-12',
			ordNo: '12356452',
			deliveryStatus: 'received',
			amount: '321 UAH',
			products: [
				{
					productId: '5d8363801c9d44000012ded0',
					price: '415',
					image: 'img/products/cakes/4.jpg',
					name: 'Strawberry cake',
					qty: '2',
				},
				{
					productId: '5d7784471c9d4400006794c2',
					price: '75',
					image: 'img/products/desserts/chocolate-mousse.jpg',
					name: 'Chocolate pudding',
					qty: '1',
				},
				{
					productId: '5d8363801c9d44000012ded0',
					price: '415',
					image: 'img/products/cakes/4.jpg',
					name: 'Strawberry cake',
					qty: '1',
				},

			],

		},
		{
			creationDate: '2019-09-25',
			ordNo: '12345987',
			deliveryStatus: 'In Process',
			amount: '321 UAH',
			products: [
				{
					productId: '5d7782041c9d4400006794b8',
					price: '75',
					image: 'img/products/cookies/32.jpg',
					name: 'Amerikaner',
					qty: '2',
				},
				{
					productId: '5d7784471c9d4400006794c2',
					price: '75',
					image: 'img/products/desserts/chocolate-mousse.jpg',
					name: 'Chocolate pudding',
					qty: '6',
				},
				{
					productId: '5d83547a1c9d44000012dec2',
					price: '385',
					image: 'img/products/cakes/1.jpg',
					name: 'Souffle cake',
					qty: '4',
				},

				{
					productId: '5d83574a1c9d44000012dec6',
					price: '285',
					image: 'img/products/cakes/2.jpg',
					name: 'Vanilla candy',
					qty: '2',
				},

				{
					productId: '5d8363801c9d44000012ded0',
					price: '415',
					image: 'img/products/cakes/4.jpg',
					name: 'Strawberry cake',
					qty: '1',
				},

			]
		}],
	products: [
		{
			productId: '75',
			price: '25',
			image: 'Tart',
			name: 'Tart2',
			qty: '2',
		},
		{
			productId: '57',
			price: '52',
			image: 'Tart',
			name: 'Vanilla candy',
			qty: '6',
		},
		{
			productId: '52',
			price: '20',
			image: 'Tart',
			name: 'Sweet candy',
			qty: '1',
		},
		{
			productId: '57',
			price: '52',
			image: 'Tart',
			name: 'Vanilla Yummy',
			qty: '3',
		},
		{
			productId: '57',
			price: '52',
			image: 'Tart',
			name: 'Vanilla Yummy',
			qty: '3',
		},

	]

};

const orderReducer = (state = initialState) => {
	return state
};

export default orderReducer