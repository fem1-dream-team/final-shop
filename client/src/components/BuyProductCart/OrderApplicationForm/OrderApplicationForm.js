import React from 'react'
import s from './OrderApplicationForm.module.css'
import connect from 'react-redux/es/connect/connect'
import { buyOrderCart } from '../../../actions/basketActions'

const OrderApplicationForm = (props) => {
	let priceArr, totalPrice, reducer, amount;

	const onClickMinus = (totalPrice, totalAmount, id, amount, price, image, name) => {
		props.buyOrderCart(totalPrice, totalAmount, id, amount, price, image, name)
	}
	const onClickPlus = () => {

	}

	// function unique(arr) {
	// 	let result = [];
	//
	// 	for (let str of arr) {
	// 		if (!result.includes(str)) {
	// 			result.push(str);
	// 		}
	// 	}
	//
	// 	return result;
	// }


	//const productsCart = [...new Set(props.productsBasket.map( object => object.id))];


	let uniqIds = {};
	let productsCart = props.productsBasket.filter(obj => !uniqIds[obj.id] && (uniqIds[obj.id] = true));
	console.log(productsCart);


	return (
		<div className={s.header}>
			<h1 className={s.name}>Your order</h1>
			<div className={s.line}></div>

			{!props.productsBasket
				? null
				: productsCart.map((item) => {
					priceArr = props.productsBasket.map((item) => { return (item.price) })
					reducer = (accumulator, currentVal) => { return Number(accumulator) + Number(currentVal) }
					totalPrice = Number(priceArr.reduce(reducer, 0))
				return (
					<div className={s.descriptionOrder} key={item.id}>
						<div className={s.imgSize}><img src={item.image} alt="Product img"/></div>
						<div className={s.nameProduct}>
							<p>{item.name}</p>
						</div>
						<div className={s.plusMinusCount}>
							<p className={s.plusMinus} onClick={onClickMinus}>-</p>
							<p>{amount}</p>
							<p className={s.plusMinus} onClick={onClickPlus}>+</p>
						</div>
						<div className={s.priceContainer}>{item.price}UAH</div>

						<div className={s.delete}
						     onClick={() => { props.productsBasket.filter(item => (item === item.id)) }}>+
						</div>
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
		productsCart: state.basket.productsCart,
		id: state.basket.productsBasket.id,
		amount: state.basket.productsBasket.amount,
		price: state.basket.productsBasket.price,
		image: state.basket.productsBasket.image,
		name: state.basket.productsBasket.name,
		totalPrice: state.basket.totalPrice,
		totalAmount: state.basket.totalAmount,
	}
}

export default connect(mapStateToProps, {buyOrderCart})(OrderApplicationForm)
