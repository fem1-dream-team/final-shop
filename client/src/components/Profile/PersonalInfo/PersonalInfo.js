import React from 'react';
import classes from './PersonalInfo.module.css';

const PersonalInfo = (props) => {
	console.log(props);
	if (props.isAuth) {
		return (
			<div className={classes.personalWrap}>
				<p>Foto</p>
				<div>
					<p>First Name: {props.first_name}</p>
					<p>Last Name: {props.last_name}</p>
					<p>Email:</p>
					<p>Auth: {props.history}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className={classes.personalWrap}>
				<p>Данные из props  не приходят.</p>
			</div>)
	}
}

export default PersonalInfo;