import { BUY_BTN_HANDLER, BTN_HANDLER_BASKET } from '../actions/types'

const initialState = {
	products: null,
	productsBasket: [],
	productsCart: [],
	// totalPrice: 0,
	// totalAmount: 0,
}
const basketReducer = (state = initialState, action) => {
	switch (action.type) {
	case BUY_BTN_HANDLER: {
		return {
			...state,
			totalPrice: action.payload.totalPrice,
			totalAmount: action.payload.totalAmount,
			productsBasket: [...state.productsBasket, {
				id: action.payload.id,
				amount: action.payload.amount,
				price: action.payload.price,
				image: action.payload.image,
				name: action.payload.name,
			}]
		}
	}
	case BTN_HANDLER_BASKET: {
		return {
			...state,
			totalPrice: action.payload.totalPrice,
			totalAmount: action.payload.totalAmount,
			productsBasket: [...state.productsBasket, {
				id: action.payload.id,
				amount: action.payload.amount,
				price: action.payload.price,
				image: action.payload.image,
				name: action.payload.name,
			}]
		}
	}
	// case ADD_PRICE_TO_BASKET: {
	// 	// console.log("added ADD");
	// 		if (state.indexOf(action.payload.id) !== -1) {
	// 		return state
	// 	}
	// 	return [ ...state, action.payload.id ];
	// }
	// 	case ADD_TO_CART: {
	// 		const addedCart = state.products.find(cart => cart.id === action.id)
	// 		const existed_cart = state.productsBasket.find(cart => action.id === cart.id)
	//
	// 		if (existed_cart) {
	// 			addedCart.quantity += 1
	// 			return {
	// 				...state,
	// 				total: state.total + addedCart.price
	// 			}
	// 		} else {
	// 			addedCart.quantity = 1;
	// 			// calculating the total
	// 			const newTotal = state.total + addedCart.price
	//
	// 			return {
	// 				...state,
	// 				addedItems: [...state.addedItems, addedCart],
	// 				total: newTotal
	// 			}
	// 		}
	// 	}
	// 	case REMOVE_CART: {
	// 		const cartToRemove = state.addedCarts.find(cart => action.id === cart.id)
	// 		const new_carts = state.addedItems.filter(cart => action.id !== cart.id)
	//
	// 		//calculating the total
	// 		const newTotal = state.total - (cartToRemove.price * cartToRemove.quantity)
	// 		console.log(cartToRemove)
	// 		return {
	// 			...state,
	// 		addedItems: new_carts,
	// 		total: newTotal
	// 		}
	// 	}
	default:
		return state
	}
}
export default basketReducer