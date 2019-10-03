import React from 'react'
import s from './OrderApplicationForm.module.css'
import { buyBtnHandler } from '../../../actions/basketActions'
import connect from 'react-redux/es/connect/connect'

const OrderApplicationForm = (props) => {
	console.log(props.productsBasket)
	let priceArr, totalPrice, reducer;
	return (
		<div className={s.header}>
			<h1 className={s.name}>Your order</h1>
			<div className={s.line}></div>

			{!props.productsBasket
				? null
				: props.productsBasket.map((item) => {
					priceArr = props.productsBasket.map((item) => { return (item.price) })
					reducer = (accumulator, currentVal) => { return Number(accumulator) + Number(currentVal) }
					totalPrice = Number(priceArr.reduce(reducer, 0))

					return (
						<div className={s.descriptionOrder}>
							<div className={s.imgSize}><img src={item.image} alt="Product img"/></div>
							<div className={s.nameProduct}>
								<p>{item.name}</p>
							</div>
							<div className={s.plusMinusCount}>
								<p className={s.plusMinus}>-</p>
								<p></p>
								<p className={s.plusMinus}>+</p>
							</div>
							<div className={s.priceContainer}>
								{item.price} UAH
							</div>
							<props className="price log"></props>
							<div className={s.delete} onClick={() => { props.productsBasket.filter(item => (item === item.id)) }}>+</div>
						</div>
					)
				})
			}
			<div className={s.line}></div>

			<div className={s.right}><span className={s.priceText}>Price:</span> {totalPrice} UAH</div>

			<div className={s.inputContainer}>
				<span className={s.headerInput}>Name</span>
				<input className={s.inputStyle} type="text" name='name' placeholder='Your name'/>
				<span className={s.headerInput}>Phone</span><br/>
				<input className={s.inputStyle} type="text" name='phone' placeholder='Your phone'/>
				<span className={s.headerInput}>E-mail</span>
				<input className={s.inputStyle} type="text" name='email' placeholder='Email address for communication'/>
				<p>
					<span className={s.headerInput}>Shipping method</span><br/>
					<input className={s.radioBtnStyle} type="radio" name="shippingMethod" value="courier"/>Delivery
			by courier<br/>
					<input className={s.radioBtnStyle} type="radio" name="shippingMethod" value="taxi"/>Departure by
			taxi<br/>
					<input className={s.radioBtnStyle} type="radio" name="shippingMethod" value="pickup"/>Pickup<br/>
				</p>
				<span className={s.headerInput}>Delivery address</span>
				<input className={s.inputStyle} type="text" name='address'/>

				<span className={s.headerInput}>Date of delivery</span>
				<input className={s.inputStyle} type="date" name='date' style={{ width: '180px' }}/>

				<span className={s.headerInput}>Time of delivery</span>
				<input className={s.inputStyle} type="text" name='time' placeholder='Estimated delivery time' style={{ width: '180px' }}/>
				<span className={s.headerInput}>Order comment</span>
				<textarea className={s.inputStyle} name='comment' rows='3'></textarea>
				<div className={s.right}><span className={s.priceText}>Price:</span> {totalPrice} UAH</div>
				<input className={s.inputStyle} type="submit" name='checkout' value='Checkout'/>

			</div>

		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		productsBasket: state.basket.productsBasket,
		// totalAmount: state.basket.totalAmount,
		// totalPrice: state.basket.productsBasket.totalPrice,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyBtnHandler: (productID) => { dispatch(buyBtnHandler(productID)) },
		// btnBasketHandler: (id, image, price, name) => { dispatch(btnBasketHandler(id, image, price, name)) },
		// addToCart: (id, quantity) => { dispatch(addToCart(id, quantity)) },
		// removeCart: (id) => { dispatch(removeCart(id)) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderApplicationForm)