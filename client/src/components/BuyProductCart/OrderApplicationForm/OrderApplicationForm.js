import React, { Component } from 'react'
import s from './OrderApplicationForm.module.css'

export class OrderApplicationForm extends Component {
constructor (props) {
super(props);
this.state = {
	count: 0
};
}

handlePlus = () => {
this.setState({
	count: this.state.count + 1
});
}

handleMinus = () => {
if (this.state.count < 1) {
	this.setState({
		count: 1
	});
} else {
	this.setState({
		count: this.state.count - 1
	});
}
}

render () {
const {price} = this.props.price;
let totalQuantity = 1;
let totalPrice = 0
totalQuantity += this.state.count;
totalPrice += this.state.count * {price};
console.log('Quantity:' + totalQuantity);
console.log('Total Price:' + totalPrice);

return (
	<div className={s.header}>
		<h1 className={s.name}>Your order</h1>
		<div className={s.line}></div>
		<div className={s.descriptionOrder}>
			<div className={s.imgSize}><img src={this.props.image} alt="Product img"/></div>
			<div className={s.nameProduct}>
				<p>{this.props.name}</p>
				{/* <p>{props.description}</p> */}
			</div>
			<div className={s.plusMinusCount}>
				<p onClick={this.handleMinus} className={s.plusMinus}>-</p>
				<p>{this.state.count}</p>
				<p onClick={this.handlePlus} className={s.plusMinus}>+</p>
			</div>
			<div className={s.priceContainer}>
				{totalPrice} UAH
			</div>
			<div className={s.delete}>+</div>
		</div>
		<div className={s.line}></div>

		<div className={s.right}><span className={s.priceText}>Price:</span> {price} UAH</div>
		<div className={s.inputContainer}>
			<span className={s.headerInput}>Name</span>
			<input className={s.inputStyle} type="text" name='name' placeholder='Your name'/>
			<span className={s.headerInput}>Phone</span><br/>
			<input className={s.inputStyle} type="text" name='phone' placeholder='Your phone'/>
			<span className={s.headerInput}>E-mail</span>
			<input className={s.inputStyle} type="text" name='email'
			       placeholder='Email address for communication'/>
			<p>
				<span className={s.headerInput}>Shipping method</span><br/>
				<input className={s.radioBtnStyle} type="radio" name="shippingMethod" value="courier"/>Delivery
				by courier<br/>
				<input className={s.radioBtnStyle} type="radio" name="shippingMethod" value="taxi"/>Departure by
				taxi<br/>
				<input className={s.radioBtnStyle} type="radio" name="shippingMethod"
				       value="pickup"/>Pickup<br/>
			</p>
			<span className={s.headerInput}>Delivery address</span>
			<input className={s.inputStyle} type="text" name='address'/>

			<span className={s.headerInput}>Date of delivery</span>
			<input className={s.inputStyle} type="date" name='date' style={{ width: '180px' }}/>

			<span className={s.headerInput}>Time of delivery</span>
			<input className={s.inputStyle} type="text" name='time' placeholder='Estimated delivery time'
			       style={{ width: '180px' }}/>

			<span className={s.headerInput}>Order comment</span>
			<textarea className={s.inputStyle} name='comment' rows='3'></textarea>
			<div className={s.right}><span className={s.priceText}>Price:</span> {price} UAH</div>
			<input className={s.inputStyle} type="submit" name='checkout' value='Checkout'/>
		</div>
	</div>
)
}
}