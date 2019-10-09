import { BTN_HANDLER_BASKET, BTN_REMOVE_PRODUCT } from '../actions/types'

const initialState = {
	products: null,
	productsBasket: [],
}

const basketReducer = (state = initialState, action) => {
	switch (action.type) {
	case BTN_HANDLER_BASKET: {
		return {
			...state,
			productsBasket: [...state.productsBasket, {
				id: action.payload.id,
				image: action.payload.image,
				name: action.payload.name,
				price: action.payload.price,
			}],
		}
	}
	case BTN_REMOVE_PRODUCT: {
		const filteredOrder = state.productsBasket.filter((product) => product.id !== action.payload.id);
		// filteredOrder  will hold record not having action.payload

		return Object.assign({}, state, {
			productsBasket: [...filteredOrder]
		})
	}

	default:
		return state
	}
}
export default basketReducer