import { BTN_HANDLER_BASKET, BTN_REMOVE_PRODUCT, PLUS_ITEM_PRICE } from './types'

export const buyBtnHandler = (id, image, name, price) => {
	return {
		type: BTN_HANDLER_BASKET,
		payload: {
			id: id,
			image: image,
			name: name,
			price: price,
		}
	}
}
export const removeBtnHandler = (id) => {
	return {
		type: BTN_REMOVE_PRODUCT,
		payload: {
			id: id,
		}
	}
}

export const plusItemPrice = (id, price) => {
	return {
		type: PLUS_ITEM_PRICE,
		payload: {
			id: id,
			price: price
		}
	}
}