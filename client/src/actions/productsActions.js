import { GET_PRODUCTS_CATEGORY_SAGA, GET_PRODUCTS_SEARCH_SAGA, SET_PRODUCTS_LIST } from './types'

export const getProductCategories = (category) => {
	return {
		type: GET_PRODUCTS_CATEGORY_SAGA,
		payload: category
	}
}
export const getSearchProducts = (req) => {
	return {
		type: GET_PRODUCTS_SEARCH_SAGA,
		payload: req
	}
}

export const setProductsList = (products) => {
	console.log('products: ' + products)
	return {
		type: SET_PRODUCTS_LIST,
		payload: products
	}
}