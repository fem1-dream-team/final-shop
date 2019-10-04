import React from 'react'
import {connect} from 'react-redux'

import {makeStyles, Button} from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

import {showAuthForm, showRegister} from '../../../../actions/authFormActions'
import {withRouter} from 'react-router-dom'
import {checkIfIsLoggedIn, logoutCurrentUser} from '../../../../actions/authActions'
import Grid from '@material-ui/core/Grid';

const LoginPage = (props) => {
	const classes = useStyles();

	const onIconClick = () => {
		if (props.isAuth) {
			props.history.push('/profile/personal-info')
		} else {
			props.checkIfIsLoggedIn();
			props.showAuthForm(true)
		}
	};

	return (
		<div className={classes.container}>
			{/* <div> */}
			<AccountCircleOutlinedIcon className={classes.userIcon} onClick={onIconClick}/>
			{/* </div> */}
			{props.isAuth
				? <div>
					<Button onClick={() => { props.history.push('/profile/personal-info') }}> Welcome, Kukusiikki{props.first_name} </Button>
					<Button onClick={props.logoutCurrentUser}> Logout </Button>
				</div>
				: null}
		</div>

	)
}

const mapStateToProps = state => {
	return {
		isAuth: true,
		first_name: state.auth.customer.first_name,
		email: state.auth.customer.email,
	}
}

export default connect(mapStateToProps, {
	showAuthForm,
	showRegister,
	logoutCurrentUser,
	checkIfIsLoggedIn
})(withRouter(LoginPage))

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		// justify='space-between',
		alignItems: 'center',
		// flexWrap='nowrap'
		backgroundColor: 'red'
	},
	iconContainer: {
		position: 'relative',
	},
	userIcon: {
		position: 'static',
		margin: '0 20px',
		// left: 0,
		// top: '1vh',
		height: 25
	},
	welcomeWrapper: {
		display: 'flex'
	}
}))