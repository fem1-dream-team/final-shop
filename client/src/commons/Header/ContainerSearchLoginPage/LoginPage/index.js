import React from 'react'
import { connect } from 'react-redux'

import { makeStyles, Button, Dialog, DialogContent} from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

import Register from './Register'
import Login from './Login'
import { showAuthForm, showRegister } from '../../../../actions/authFormActions'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		borderRadius: 17,
		backgroundColor: '#f186a0'
	},
	buttonOnLoading: {
		margin: theme.spacing(1),
		borderRadius: 17,
		backgroundColor: '#f186a0',
		cursor: 'wait'
	},
	icon: {
		width: 25,
		height: 25,
		color: '#fff',
		cursor: 'pointer'
	},
	loading: {
		cursor: 'wait'
	},
	swgWrapper: {
		position: 'relative',
		left: 50,
		bottom: 1
	},
	welcome: {

		margin: 0,
		fontSize: 12,
	}
}))

const LoginPage = (props) => {
	const classes = useStyles()

	return (
		<div>
			{props.isAuth ? <p className={classes.welcome}> Welcome, {props.first_name} </p> : null }
			<div className={classes.swgWrapper}>
				<AccountCircleOutlinedIcon className={classes.icon} onClick={() => { props.showAuthForm(true) }}/>
			</div>

			<Dialog
				open={props.open}
				className={props.loading ? classes.loading : null}
				onClose={() => { props.showAuthForm(false) }}
				scroll='paper'
				aria-labelledby="form-dialog-title"
			>
				<DialogContent>
					{props.needsRegistration ? <div><Register/></div> : <div><Login/></div>}
					<Button
						onClick={props.needsRegistration ? () => { props.showRegister(false) } : () => { props.showRegister(true) }}
						className={props.loading ? classes.buttonOnLoading : classes.button}
						variant="outlined"
					>
						{props.needsRegistration ? <div>Log In</div> : <div>Register</div>}
					</Button>
				</DialogContent>
			</Dialog>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.general.loading,
		open: state.auth.open,
		needsRegistration: state.auth.needsRegistration,
		isAuth: state.auth.isAuth,
		first_name: state.auth.customer.first_name
	}
}

export default connect(mapStateToProps, {showAuthForm, showRegister})(LoginPage)