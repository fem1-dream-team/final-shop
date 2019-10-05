import React, {Fragment, useState} from 'react';
import classes from './PersonalInfo.module.css';
import {connect} from 'react-redux';
import EditPersonalInfo from './EditPersinalInfo/EditPersinalInfo';

const PersonalInfo = (props) => {
	const [editProfile, setEditProfile] = useState(false);
	console.log(props);
	const onSubmit = (formData) => {
		console.log(formData);
	}

	return (
		<div className={classes.personalWrap}>
			{editProfile
				?					<div style={{ padding: 15 }}>
					<EditPersonalInfo state={props} onSubmit={onSubmit}/>
				</div>
				:				<Fragment>
					<h3>Personal Data</h3>
					<p className={classes.item}>First Name: {props.first_name}</p>
					<p className={classes.item}>Last Name: {props.last_name} </p>
					<p className={classes.item}>Email: {props.email}</p>
					<p className={classes.item}>Tel.: {props.tel}</p>
					<p className={classes.item}>Date of birth: {props.birth}</p>
					<p className={classes.item}>Sex: {props.sex}</p>
					<p className={classes.item}>Delivery Adress: {props.adress}</p>
					<button className={classes.button} onClick={() => setEditProfile(true) }> Edit profile</button>
				</Fragment>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		first_name: state.auth.customer.first_name,
		last_name: state.auth.customer.last_name,
		email: state.auth.customer.email,
		id: state.auth.customer.id,
	}
}

export default connect(mapStateToProps)(PersonalInfo);