import React, { useState } from 'react'
import s from './OrderApplicationForm.module.css'
import styled from 'styled-components'
import connect from 'react-redux/es/connect/connect'
import { plusItemPrice, removeBtnHandler } from '../../../actions/basketActions'
import { Field, reduxForm } from 'redux-form'
import normalizePhone from './normalizePhone'
import {basePath} from '../../../actions/types';
// import validate from './validate'
// import submit from './submit'

const OrderApplicationForm = (props) => {
	let priceArr, totalPrice, reducer;

	const uniqIds = {};
	const productsCart = props.productsBasket.filter(obj => !uniqIds[obj.id] && (uniqIds[obj.id] = true));
	// поиск количества повтор. обьктов
	const counter = props.productsBasket.reduce(function (object, index) {
		// eslint-disable-next-line
		if (!object.hasOwnProperty(index.id)) {
			object[index.id] = 0;
		}
		object[index.id]++;
		return object;
	}, {});

	const removeProduct = (id) => {
		props.removeBtnHandler(id)
	}
	// validation form
	const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
		<div>
			<label className={s.headerInput}>{label}</label>
			<div>
				<input className={s.inputStyle} {...input} placeholder={placeholder} type={type}/>
				{touched && error && <span>{error}</span>}
			</div>
		</div>
	)
	// const upper = value => value && value.toUpperCase()
	const lower = value => value && value.toLowerCase()

	const { handleSubmit, pristine, reset, submitting } = props

	// submit form
	const onclick = (formData) => {
		console.log(formData)
	}

	return (
		<form className={s.header} onSubmit={handleSubmit}>

			<h1 className={s.name}>Your order</h1>
			<div className={s.line}></div>

			{!props.productsBasket
				? null
				: productsCart.map((item) => {
					priceArr = props.productsBasket.map((item) => { return (item.price) })
					reducer = (accumulator, currentVal) => { return Number(accumulator) + Number(currentVal) }
					totalPrice = Number(priceArr.reduce(reducer, 0))
    
					const CountFunction = () => {
						const priceId = Number(item.price)
						const [count, setCount] = useState((Number(counter[item.id])));
						const [price, setPrice] = useState(((priceId * count)));
						// const [totalPrice, setTotalPrice] = useState(Number(priceArr.reduce(reducer, 0)));

						const onClickMinus = () => {
							if (count !== 0) {
								setCount(count - 1)
								setPrice(price - priceId)
								// props.productsBasket
							}
						};
						const onClickPlus = () => {
							setCount(count + 1)
							setPrice(price + priceId)
							props.plusItemPrice(item.id, item.price)
							// setTotalPrice(totalPrice + priceId)
						};
						return (
							<div>
								<div className={s.descriptionOrder} key={item.id}>
									<div className={s.imgSize}><img src={`${basePath}${item.image}`} alt="Product img"/></div>
									<div className={s.nameProduct}>
										<p>{item.name}</p>
									</div>

									<div className={s.plusMinusCount}>
										<p className={s.plusMinus} onClick={onClickMinus}>-</p>
										<p>{count}</p>
										<p className={s.plusMinus} onClick={onClickPlus}>+</p>
									</div>
									<div className={s.priceContainer}>{price}UAH</div>
									<div className={s.delete} onClick={() => removeProduct(item.id)}>+</div>
								</div>
							</div>
						)
					}

					return (
						<CountFunction/>
					)
				})
			}
			<div className={s.line}></div>
			<div className={s.right}><span className={s.priceText}>Price:</span> {totalPrice} UAH</div>
			<div className={s.inputContainer}>

				<Field name="username" type="text" component={renderField} label="Name" placeholder='Your name' normalize={lower}/>
				<Field name="phone" type="text" component={renderField} label="Phone" placeholder='Your phone' normalize={normalizePhone}/>
				<Field name="email" type="email" component={renderField} label="E-mail" placeholder='Email address for communication'/>
				<div>
					<label>Shipping method</label>
					<div>
						<div className={s.radioBtnStyle}>
							<label>
								<Field name="shippingMethod" component="input" type="radio" value="courier"/>Delivery
									by courier
							</label>
						</div>
						<div className={s.radioBtnStyle}>
							<label>
								<Field name="shippingMethod" component="input" type="radio" value="taxi"/>Departure by
									taxi
							</label>
						</div>
						<div className={s.radioBtnStyle}>
							<label>
								<Field name="shippingMethod" component="input" type="radio" value="pickup"/>Pickup
							</label>
						</div>
					</div>
				</div>

				<Field name="address" type="text" component={renderField} label="Delivery address" />
				<div style={{ width: '180px' }}>
					<Field name="date" type="date" component={renderField} label="Date of delivery"/>
				</div>
				<div style={{ width: '180px' }}>
					<Field name="time" type="text" component={renderField} label="Time of delivery"/>
				</div>

				<div>
					<label>Payment method</label>
					<div>
						<div className={s.radioBtnStyle}>
							<label>
								<Field name="paymentMethod" component="input" type="radio" value="cash"/>Cash payment
							</label>
						</div>
						<div className={s.radioBtnStyle}>
							<label>
								<Field name="paymentMethod" component="input" type="radio" value="card"/>Payment by card
							</label>
						</div>
					</div>
				</div>

				<div>
					<label>Order comment</label>
					<Field name="comment" component={Textarea} rows='3'/>
				</div>
				<div className={s.right}><span className={s.priceText}>Price:</span> {totalPrice} UAH</div>

				<button className={s.inputStyle} type="submit" disabled={pristine || submitting} onClick={reset} onSubmit={onclick}>Checkout</button>
			</div>
		</form>
	)
}

const Textarea = styled.textarea`
	width: 100%;
	padding: 7px 5px;
	border: 1px solid #95d6bf;
	border-radius: 10px;
`
const mapStateToProps = (state) => {
	return {
		productsBasket: state.basket.productsBasket,
		id: state.basket.productsBasket.id,
		image: state.basket.productsBasket.image,
		name: state.basket.productsBasket.name,
		price: state.basket.productsBasket.price,
	}
}

export default connect(mapStateToProps, {removeBtnHandler, plusItemPrice})(reduxForm({ form: 'submitValidation' })(OrderApplicationForm))