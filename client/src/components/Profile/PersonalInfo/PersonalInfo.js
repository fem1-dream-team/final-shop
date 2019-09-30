import React from 'react';
import classes from './PersonalInfo.module.css';

const PersonalInfo = () => {
	return (
		<div className={classes.personalWrap}>
			<p>Foto</p>
			<div>
				<p>First Name</p>
				<p>Last Name</p>
				<p>Email:</p>
			</div>
		</div>
	)
}

export default PersonalInfo;