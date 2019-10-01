const OPEN_BASKET_ADD_PRICE = 'OPEN_BASKET_ADD_PRICE'
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_CART = 'REMOVE_CART';

// import getProductsList from '../Products/Products'

const initialState = {

	products: [],
	productsBasket: [],
	productsCart: [],
	total: 0,

}

const basketReducer = (state = initialState, action) => {
	switch (action.type) {
	case OPEN_BASKET_ADD_PRICE: {
		return {
			...state,
			productsBasket: state.productsBasket.map(p => {
				if(p.id === action.id) {
					return {...p, status: true}
				}
			})
			// productsBasket: {...state, productsBasket: [...action.products]}
		}
		// return {
		// 	...state,
		// 	products: state.products.map(product => {
		// 		if (product.id === action.id) {
		// 			return {basket: [...state.basket, {...product, isOpen: true}]}
		// 		}
		// 		return product
		// 	} )
		//
		// }
	}
	case ADD_TO_CART: {
		const addedCart = state.products.find(cart => cart.id === action.id)
		const existed_cart = state.productsBasket.find(cart => action.id === cart.id)

		if (existed_cart) {
			addedCart.quantity += 1
			return {
				...state,
				total: state.total + addedCart.price
			}
		} else {
			addedCart.quantity = 1;
			// calculating the total
			const newTotal = state.total + addedCart.price

			return {
				...state,
				addedItems: [...state.addedItems, addedCart],
				total: newTotal
			}
		}
	}
	case REMOVE_CART: {
		// const cartToRemove = state.addedCarts.find(cart => action.id === cart.id)
		// const new_carts = state.addedItems.filter(cart => action.id !== cart.id)
		//
		// // calculating the total
		// const newTotal = state.total - (cartToRemove.price * cartToRemove.quantity)
		// console.log(cartToRemove)
		// return {
		// 	...state,
		// 	addedItems: new_carts,
		// 	total: newTotal
		// }
	}
	default: return state
	}
}

export const openBasketAddPrice = (id, open, price) => { return {type: OPEN_BASKET_ADD_PRICE, id, open, price} }

export const addToCart = (id, price, total) => { return {type: ADD_TO_CART, id, price, total} }

export const removeCart = (id) => { return {type: REMOVE_CART, id} }

export default basketReducer