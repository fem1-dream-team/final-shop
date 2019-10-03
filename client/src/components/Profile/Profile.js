import React, {useEffect} from 'react';
import classes from './Profile.module.css';
import Navigation from './Navigation/Navigation';
import {withRouter} from 'react-router-dom';
import OrderHistory from './OrderHistory/OrderHistory';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import {connect} from 'react-redux';
import {showAuthForm} from "../../actions/authFormActions";

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	}
};

const Profile = (props) => {
	useEffect(() => {
		if(!props.isAuth) {
			props.history.push("/")
			props.showAuthForm(true)

			// eslint-disable-next-line
		}}, [])

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

export default connect(mapStateToProps, {showAuthForm})(withRouter(Profile))