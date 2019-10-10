import React from 'react';
import classes from './OrderHistory.module.css';
import {connect} from 'react-redux';
import orderReducer from '../../../reducers/orderReducer';
import OrderHistoryItem from './OrderHistoryItem/OrderHistoryItem';
import {withRouter} from 'react-router-dom';

const OrderHistory = (props) => {
	orderReducer();
	const orders = props.orders.orders;
	const ordersList = orders.map(item => {
		const id = item.ordNo;
		return (
			<OrderHistoryItem
				ordNo={item.ordNo}
				creationDate={item.creationDate}
				deliveryStatus={item.deliveryStatus}
				amount={item.amount}
				key={id}
				state={props}
			/>
		)
	})
	return (
		<div className={classes.orderWrap}>
			<h3>Order history</h3>
			<div>
				{ordersList}
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return ({
		orders: state.orders
	})
}

export default connect(mapStateToProps, {})(withRouter(OrderHistory))