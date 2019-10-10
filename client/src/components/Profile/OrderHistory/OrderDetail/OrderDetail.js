import React, {Fragment} from 'react';
import classes from './OrderDetail.module.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

/*const mapStateToProps = (state) => {
	return {
		orders:[
			{
				creationDate: "2019-09-09T15:50:53.142Z",
				ordNo: '12345547',
				deliveryStatus: 'In Process',
				products: [
					{
						productId: '75',
						price: '25',
						image: 'Tart',
						name: 'Tart2',
						qty: '2',
					},
					{
						productId: '57',
						price: '52',
						image: 'Tart',
						name: 'Vanilla candy',
						qty: '6',
					},
				]
			},
			{
				creationDate: "2019-09-08T15:50:53.142Z",
				ordNo: '12345237',
				deliveryStatus: 'received',
				products: [
					{
						productId: '75',
						price: '25',
						image: 'Tart',
						name: 'Tart Row',
						qty: '1',
					},
					{
						productId: '57',
						price: '52',
						image: 'Tart',
						name: 'Vanilla Yummy',
						qty: '3',
					},
				]
			},
			{
				ordNo: '12356477',
				deliveryStatus: 'received',
				products: [
					{
						productId: '75',
						price: '25',
						image: 'Tart',
						name: 'Tart2',
						qty: '5',
					},
					{
						productId: '57',
						price: '52',
						image: 'Tart',
						name: 'Sweet candy',
						qty: '7',
					},
				]
			}

		]}
}*/


const OrderDetail = (props) => {
	console.log(props);
	const product = props.orders
	/*const productDetailed = product.map( item => {
		if(item.params.id === item.ordNo){

		}

		}

	)*/
	return(
			<div className={classes.item}>
				<div>Order No: {props.ordNo}</div>
				<div>Date: {props.creationDate}</div>
				<div>Delivery status: {props.deliveryStatus}</div>
				<button onClick={props.history.goBack}> Back.</button>
			</div>
		)
	}
export default OrderDetail
