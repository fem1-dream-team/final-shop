import React from 'react';
import classes from './PersonalInfo.module.css';
import {connect} from 'react-redux';

const PersonalInfo = (props) => {

	if (props.isAuth) {
		return (
			<div className={classes.personalWrap}>
				<p className={classes.item}>First Name: {props.first_name}</p>
				<p className={classes.item}>Last Name: {props.last_name} </p>
				<p className={classes.item}>Email: {props.email}</p>
				<button className={classes.button} onClick={() => { alert('Edit data') }}> Edit profile</button>
			</div>
		)
	} else {
		return (
			<div>
				<p>No data</p>
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