import { BTN_HANDLER_BASKET, BTN_HANDLER_CART} from '../actions/types'

const initialState = {
	products: null,
	productsBasket: [],
	amount: 0,
	productsCart: [],
	totalPrice: 0,
	totalAmount: 0,
	isOpen: false,
}

// debugger
const basketReducer = (state = initialState, action) => {
	// let priceArr = state.productsBasket.map((item) => { return (item.price) })
	// let reducer = (accumulator, currentVal) => { return Number(accumulator) + Number(currentVal) }
	// let totalPrice = Number(priceArr.reduce(reducer, 0))
	// let totalAmount = priceArr.length

	switch (action.type) {
	case BTN_HANDLER_BASKET: {
		return {
			...state,
			productsBasket: [...state.productsBasket, {
				id: action.payload.id,
				amount: action.payload.amount,
				price: action.payload.price,
				image: action.payload.image,
				name: action.payload.name,
			}],
		}
	}

	case BTN_HANDLER_CART: {
		return {
			...state,
			totalPrice: action.payload.totalPrice,
			totalAmount: action.payload.totalAmount,
			productsCart: [...state.productsBasket, {
				id: action.payload.id,
				amount: action.payload.amount,
				price: action.payload.price,
				image: action.payload.image,
				name: action.payload.name,
			}]
		}
	}
	default:
		return state
	}
}

export default basketReducer