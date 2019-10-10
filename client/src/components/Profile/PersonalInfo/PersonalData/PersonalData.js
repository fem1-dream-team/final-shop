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
			<h3 className={classes.title}>Personal Data</h3>
			<div></div>
			<div className={classes.itemNameTitle}> <span className={classes.itemName}>First Name: </span>{props.first_name}</div>

			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Last Name: </span>{props.last_name}</div>

			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Email: </span> {props.email}</div>

			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Tel.: </span>{props.tel}</div>

			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Date of birth: </span>{props.birth}</div>

			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Sex: </span>{props.sex}</div>

			<div className={classes.itemNameTitle}> <span className={classes.itemName}>Delivery Adress:  </span>{props.adress}</div>

		</Fragment>
	)
};

export default connect(mapStateToProps, { })(PersonalData);