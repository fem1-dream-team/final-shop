import { SET_DETAILED_PRODUCT, SET_PRODUCTS_LIST } from '../actions/types'

const initialState = {
	productsList: null,
	detailedProduct: null
}


const productsReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_PRODUCTS_LIST:
		return {
			...state,
			productsList: action.payload.productsList,
			categoryName: action.payload.categoryName,
		}
	case SET_DETAILED_PRODUCT:
		return {
			...state,
			detailedProduct: action.payload
		}
	default:
		return state
	}
}

export default productsReducer