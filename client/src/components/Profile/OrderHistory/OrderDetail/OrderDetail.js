import React from 'react';
import classes from './OrderDetail.module.css';
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

const OrderDetail = (props) => {
	console.log(props);
	return (
		<div className={classes.item}>
			<div>Order No: {props.ordNo}</div>
			<div>Date: {props.creationDate}</div>
			<div>Delivery status: {props.deliveryStatus}</div>
			<button onClick={props.history.goBack}> Back.</button>
		</div>
	)
}
export default OrderDetail
