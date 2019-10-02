import { SET_PRODUCTS_LIST } from '../actions/types'

const initialState = {
	productsList: null
}

// debugger
const productsReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_PRODUCTS_LIST:
		return {
			...state,
			productsList: action.payload.productsList,
			categoryName: action.payload.categoryName,

		}
	default:
		return state
	}
}

export default productsReducer