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
	const idOrder = props.match.params.id;
	const productList = props.orders.orders;
	const productItem = productList.map((item) => {
		if (item.ordNo === idOrder) {
			return (
				<div className={classes.itemStatus} key={idOrder}>
					<div className={classes.itemNameTitle}> <span className={classes.itemName}>Order No: </span>{item.ordNo}</div>
					<div className={classes.itemNameTitle}> <span className={classes.itemName}>Date: </span>{item.creationDate}</div>
					<div className={classes.itemNameTitle}> <span className={classes.itemName}>Delivery status:</span> {item.deliveryStatus}</div>
					<div className={classes.itemNameTitle}> <span className={classes.itemName}>Total Amount: </span>{item.amount}</div>
					{item.products.map(product => {
						return (
							<div className={classes.itemList} key={Math.round(100 - 0.5 + Math.random() * (1000 - 100 + 1))}>
								<div className={classes.item}>
									<img className={classes.itemImg} src={`${basePath}${product.image}`} alt="альтернативный текст"/>
								</div>
								<div className={classes.item}> <span className={classes.itemName}>Name:</span> {product.name}</div>
								<div className={classes.item}><span className={classes.itemName}>Price:</span> {product.price} UAH</div>
								<div className={classes.item}> <span className={classes.itemName}>Q-ty:</span> {product.qty}</div>
							</div>

						)
					})}
				</div>
			)
		}
		return null
	})

	return (
		<div className={classes.wrapDetailed}>
			<h3 className={classes.title}>Order Detailed</h3>
			{productItem}
			<p className={classes.goBack} onClick={props.history.goBack}>Go back...</p>
		</div>
	)
}

export default connect(mapStateToProps, {})(withRouter(OrderDetail))
