import {
	SHOW_ORDER_HISTORY,
} from '../actions/types'

const initialState = {
	orders:[
		{
			creationDate: "2019-09-09T15:50:53.142Z",
			ordNo: '12345547',
			deliveryStatus: 'In Process',
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
			]
		},
		{
			creationDate: "2019-09-08T15:50:53.142Z",
			ordNo: '12345237',
			deliveryStatus: 'received',
			products: [
				{
					productId: '75',
					price: '25',
					image: 'Tart',
					name: 'Tart Row',
					qty: '1',
				},
				{
					productId: '57',
					price: '52',
					image: 'Tart',
					name: 'Vanilla Yummy',
					qty: '3',
				},
			]
		},
		{
			ordNo: '12356477',
			deliveryStatus: 'received',
			products: [
				{
					productId: '75',
					price: '25',
					image: 'Tart',
					name: 'Tart2',
					qty: '5',
				},
				{
					productId: '57',
					price: '52',
					image: 'Tart',
					name: 'Sweet candy',
					qty: '7',
				},
				{
					productId: '52',
					price: '20',
					image: 'Tart',
					name: 'Sweet candy',
					qty: '1',
				},

			],

		},],
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
]


};

const orderReducer = (state = initialState, action) => {
			return state
};

export default orderReducer