import React from 'react';
import classes from './Profile.module.css';
import Navigation from './Navigation/Navigation';
import {withRouter} from 'react-router-dom';
import OrderHistory from './OrderHistory/OrderHistory';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {}
};

const Profile = (props) => {
	console.log(props.location.pathname);
	return (
		<div className={classes.profileWrapper}>
			<Navigation/>
			<div className={classes.profileWrapper}>
				{props.location.pathname === '/profile/personal-info'
					? <PersonalInfo/>
					:					null
				}
				{props.location.pathname === '/profile/my-orders'
					? <OrderHistory/>
					:					null
				}
			</div>
		</div>
	)
};

export default connect(mapStateToProps, {})(withRouter(Profile))