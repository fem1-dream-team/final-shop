import { ADD_TO_CART, ADD_PRICE_TO_BASKET, REMOVE_CART, BUY_BTN_HANDLER_SAGA, BTN_HANDLER_BASKET } from './types'

export const addPriceToBasket = (id, price) => {
	return {
		type: ADD_PRICE_TO_BASKET,
		payload: {
			id,
			price
		}
	}
}
export const addToCart = (id, price, total) => {
	return {
		type: ADD_TO_CART,
		payload: {
			id,
			price,
			total
		}
	}
}
export const removeCart = (id) => {
	return {
		type: REMOVE_CART,
		payload: {
			id
		}
	}
}

export const buyBtnHandler = (productID, price, image, name) => {
	return {
		type: BUY_BTN_HANDLER_SAGA,
		payload: {
			productId: productID,
			price: price,
			image: image,
			name: name,
			// totalPrice: totalPrice,
			// totalAmount: totalAmount
		}
	}
}

export const btnBasketHandler = (productID, image, price, name) => {
	return {
		type: BTN_HANDLER_BASKET,
		payload: {
			productId: productID,
			price: price,
			image: image,
			name: name,
			// totalPrice: totalPrice,
			// totalAmount: totalAmount
		}
	}
}
