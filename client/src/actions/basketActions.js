import { ADD_TO_CART, OPEN_BASKET_ADD_PRICE, REMOVE_CART } from './types'

export const openBasketAddPrice = (id, open, price) => {
	return {
		type: OPEN_BASKET_ADD_PRICE,
		id,
		open,
		price
	}
}
export const addToCart = (id, price, total) => {
	return {
		type: ADD_TO_CART,
		id,
		price,
		total
	}
}
export const removeCart = (id) => {
	return {
		type: REMOVE_CART,
		id
	}
}
