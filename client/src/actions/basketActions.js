import { BTN_HANDLER_BASKET, BTN_HANDLER_CART } from './types'

export const buyBtnHandler = (id, amount, price, image, name) => {
	return {
		type: BTN_HANDLER_BASKET,
		payload: {
			id: id,
			amount: amount,
			price: price,
			image: image,
			name: name,
		}
	}
}

export const buyOrderCart = (totalPrice, totalAmount, id, amount, price, image, name) => {
	return {
		type: BTN_HANDLER_CART,
		payload: {
			totalPrice: totalPrice,
			totalAmount: totalAmount,
			productsCart: {
				id: id,
				amount: amount,
				price: price,
				image: image,
				name: name,
			}
		}
	}
}
