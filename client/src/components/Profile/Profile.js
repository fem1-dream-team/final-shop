import React from 'react';
import classes from './Profile.module.css';
import Navigation from './Navigation/Navigation';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import OrderHistory from './OrderHistory/OrderHistory';

export const Profile = () => {
	return (
		<BrowserRouter>
			<div className={classes.profileWrapper}>
				<Navigation/>

				<div className={classes.profileWrapper}>
					<Switch>
					<Route path='/user/profile/personal-information/' component={PersonalInfo}/>
					<Route path='/user/profile/my-orders' component={OrderHistory}/>
					</Switch>
				</div>

			</div>
		</BrowserRouter>
	)
};