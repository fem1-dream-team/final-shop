import {
	GET_PRODUCTS_CATEGORY_SAGA,
	GET_DETAILED_PRODUCT_SAGA, SET_DETAILED_PRODUCT,
	GET_PRODUCTS_SEARCH_SAGA
} from './types'

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

export const getDetailedProduct = (productId) => {
	return {
		type: GET_DETAILED_PRODUCT_SAGA,
		payload: productId
	}
}

export const setDetailedProduct = (data) => {
	return {
		type: SET_DETAILED_PRODUCT,
		payload: data
	}
}