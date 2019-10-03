import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className={classes.navWrap}>
			<div className={classes.item}>
				<NavLink
					to='/user/profile/personal-information/'
					className={classes.itemLink}
					activeClassName={classes.active}>
					Personal information
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink
					to='/user/profile/basket'
					className={classes.itemLink}
					activeClassName={classes.active}>
					Basket
				</NavLink>
			</div>

			<div className={classes.item}>
				<NavLink
					to='/user/profile/my-orders'
					className={classes.itemLink}
					activeClassName={classes.active}>
					Order History
				</NavLink>
			</div>
		</nav>
	)
}

export default Navigation;