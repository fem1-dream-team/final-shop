import React from 'react';
import classes from './Profile.module.css';
import Navigation from './Navigation/Navigation';
import {withRouter} from 'react-router-dom';
import OrderHistory from './OrderHistory/OrderHistory';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import {connect} from 'react-redux';
import {showAuthForm} from '../../actions/authFormActions';

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	}
};

const Profile = (props) => {
	if (!props.isAuth) {
		props.history.push('/');
		props.showAuthForm(true)
	}

	return (
		<div className={classes.profileWrapper} open={props.isAuth}>
			<Navigation/>
			<div className={classes.profileWrapper}>
				{props.location.pathname === '/profile/personal-info'
					? <PersonalInfo/>
					: null
				}
				{props.location.pathname === '/profile/my-orders'
					? <OrderHistory/>
					:props.location.pathname === '/profile/my-orders/'
						? null: null
				}
			</div>
		</div>
	)
};

export default connect(mapStateToProps, {showAuthForm})(withRouter(Profile))
