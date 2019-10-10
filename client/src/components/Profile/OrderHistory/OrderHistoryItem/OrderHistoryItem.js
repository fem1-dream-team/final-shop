import React from 'react';
import classes from './OrderHistoryItem.module.css';
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
	return {}
}

const OrderHistoryItem = (props) => {
	console.log(props);
	const id = props.ordNo
	return (
		<div className={classes.item}>
			<div>Order No: {props.ordNo}</div>
			<div>Date: {props.creationDate}</div>
			<div>Delivery status: {props.deliveryStatus}</div>
			<div>Total Amount: {props.amount}</div>
			<Link to={`/profile/my-orders/${id}`}>See more ...</Link>
		</div>
	)
}
export default connect(mapStateToProps, {})(withRouter(OrderHistoryItem))
