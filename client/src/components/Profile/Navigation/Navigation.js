import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<div className={classes.navWrap}>
			<h3>Navigation</h3>
			<ul>
				<li>Personal Info</li>
				<li>Basket</li>
				<li>My Offers</li>
			</ul>
		</div>
	)
}

export default Navigation;