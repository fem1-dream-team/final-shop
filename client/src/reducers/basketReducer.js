import { BTN_HANDLER_BASKET, BTN_REMOVE_PRODUCT, PLUS_ITEM_PRICE } from '../actions/types'

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
	case PLUS_ITEM_PRICE: {
		return {
			...state,
			productsBasket: [...state.productsBasket, {
				id: action.payload.id,
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
