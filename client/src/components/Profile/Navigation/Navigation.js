import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className={classes.navWrap}>
			<div className={classes.item}>
				<NavLink exact to='/profile/personal-information/' activeClassName={classes.active}>Personal information</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink exact to='/profile/basket' activeClassName={classes.active}>Basket</NavLink>
			</div>

			<div className={classes.item}>
				<NavLink exact to='/profile/my-orders' activeClassName={classes.active}>Order History</NavLink>
			</div>
		</nav>
	)
}

export default Navigation;