import React from 'react';
import classes from './OrderDetail.module.css';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {basePath} from '../../../../actions/types';

const mapStateToProps = (state) => {
	return ({
		orders: state.orders
	})
}

const OrderDetail = (props) => {
	console.log(props.orders.orders);
	const idOrder = props.match.params.id;
	const productList = props.orders.orders;
	const productItem = productList.map((item) => {
		if (item.ordNo === idOrder) {
			return (
				<div className={classes.item} key={idOrder}>
					<div>Order No: {item.ordNo}</div>
					<div>Date: {item.creationDate}</div>
					<div>Delivery status: {item.deliveryStatus}</div>
					<div>Total Amount: {item.amount}</div>
					{item.products.map(product => {
						return (
							<div key={Math.round(100 - 0.5 + Math.random() * (1000 - 100 + 1))}>
								<div>
									<img src={`${basePath}${product.image}`} alt="альтернативный текст"/>
								</div>
								<div>Price: {product.price}</div>

								<div>Name: {product.name}</div>
								<div>Q-ty: {product.qty}
								</div>
							</div>

						)
					})}
				</div>
			)
		}
		return null
	})

	return (
		<div className={classes.item}>
			{productItem}
			<p onClick={props.history.goBack}>Go back...</p>
		</div>
	)
}

export default connect(mapStateToProps, {})(withRouter(OrderDetail))
