import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import classes from './PersonalData.module.css';

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		first_name: state.auth.customer.first_name,
		last_name: state.auth.customer.last_name,
		email: state.auth.customer.email,
		tel: state.auth.customer.tel,
		birth: state.auth.customer.birth,
		sex: state.auth.customer.sex,
		adress: state.auth.customer.adress,
	}
}

const PersonalData = (props) => {
	return (
		<Fragment>
			<h3 className={classes.item}>Personal Data</h3>
			<p className={classes.item}>First Name: {props.first_name}</p>
			<p className={classes.item}>Last Name: {props.last_name} </p>
			<p className={classes.item}>Email: {props.email}</p>
			<p className={classes.item}>Tel.: {props.tel}</p>
			<p className={classes.item}>Date of birth: {props.birth}</p>
			<p className={classes.item}>Sex: {props.sex}</p>
			<p className={classes.item}>Delivery Adress: {props.adress}</p>
		</Fragment>
	)
};

export default connect(mapStateToProps, { })(PersonalData);