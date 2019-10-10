import React from 'react';
import classes from '../OrderDetail/OrderDetail.module.css';
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
	return {}
}

const OrderHistoryItem = (props) => {
	const id = props.ordNo
	return (
		<div className={classes.wrapOrderItem}>
			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Order No: </span>{props.ordNo}</div>
			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Date: </span>{props.creationDate}</div>
			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Delivery status:</span> {props.deliveryStatus}</div>
			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Total Amount: </span>{props.amount}</div>
			<Link to={`/profile/my-orders/${id}`}>See more ...</Link>
		</div>
	)
}
export default connect(mapStateToProps, {})(withRouter(OrderHistoryItem))
