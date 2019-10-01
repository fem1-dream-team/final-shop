import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { addToCart, openBasketAddPrice, removeCart } from '../../redux/shoppingCart-reducer'
import { BasketProducts } from './BasketProducts'
// import { Products } from '../..'

export const BasketProductsContainer = (props) => {
	return (
		<div>
			<BasketProducts
				id={props.id}
				image={props.image}
				name={props.name}
				description={props.description}
				price={props.price}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		productsBasket: state.productsBasket.productsBasket
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openBasketAddPrice: (id, open, price) => { dispatch(openBasketAddPrice(id, open, price)) },
		addToCart: (id, quantity) => { dispatch(addToCart(id, quantity)) },
		removeCart: (id) => { dispatch(removeCart(id)) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BasketProductsContainer)