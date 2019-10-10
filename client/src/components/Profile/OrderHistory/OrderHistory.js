import React, {Fragment, useEffect, useState} from 'react';
import classes from './OrderHistory.module.css';
import {connect} from 'react-redux';
import OrderHistoryItem from "./OrderHistoryItem/OrderHistoryItem";
import {Link} from "react-router-dom";
import orderReducer from "../../../reducers/orderReducer";

const OrderHistory = (props) => {
	orderReducer();
	console.log(props);
	/*const productItems = props.orders;
		const productList = productItems.map(item => {
		const id = item.ordNo;
		return(
			<OrderHistoryItem
	ordNo={item.ordNo}
	creationDate={item.creationDate}
	deliveryStatus={item.deliveryStatus}
	key={id}
	state={props}
/>
		)
	});*/

	return (
		<div className={classes.orderWrap}>
			<h3>Order history</h3>
			<div>
				{/*{productList}*/}

			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return ({
		orders: state.orders
	})
}

export default connect(mapStateToProps, {})(OrderHistory)




/*========================*/
/*<OrderHistoryItem
	ordNo={item.ordNo}
	creationDate={item.creationDate}
	deliveryStatus={item.deliveryStatus}
	key={id}
	state={props}
/>*/

/*
<div
ordNo={item.ordNo}
creationDate={item.creationDate}
deliveryStatus={item.deliveryStatus}
key={id}
state={props}
/>*/
