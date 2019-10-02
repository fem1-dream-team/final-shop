import React from 'react';
import classes from './PersonalInfo.module.css';
import {connect} from 'react-redux';

const PersonalInfo = (props) => {
	// debugger
	console.log(props);
	if (props.isAuth) {
		return (
			<div className={classes.personalWrap}>
				<p>First Name: {props.first_name}</p>
				<p>Last Name: {props.last_name} </p>
				<p>Email: {props.email}</p>
			</div>
		)
	} else {
		return (
			<div>
				<p>Нет данных</p>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		first_name: state.auth.customer.first_name,
		last_name: state.auth.customer.last_name,
		email: state.auth.customer.email,
		id: state.auth.customer.id
	}
}

export default connect(mapStateToProps)(PersonalInfo);