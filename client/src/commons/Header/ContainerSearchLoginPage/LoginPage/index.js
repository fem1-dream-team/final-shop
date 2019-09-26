import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Register from './Register'
import { Login } from './Login'
import { makeStyles } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import { connect } from 'react-redux'
import { hideSagaAuthForm, showSagaAuthForm, showSagaLogin, showSagaRegister } from '../../../../actions/sagaAuthForm'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		borderRadius: 17,
		backgroundColor: '#f186a0'
	},
	icon: {
		width: 25,
		height: 25,
		color: '#fff',
		cursor: 'pointer'
	},
	swgWrapper: {
		position: 'relative',
		left: 50,
		bottom: 1
	}
}))

const LoginPage = (props) => {
	const classes = useStyles()

	return (
		<div>
			<div className={classes.swgWrapper}>
				<AccountCircleOutlinedIcon className={classes.icon} onClick={props.showSagaAuthForm}/>
			</div>
			<Dialog open={props.open} scroll='paper' onClose={props.hideSagaAuthForm} aria-labelledby="form-dialog-title">
				<DialogContent>
					{props.needsRegistration ? <div><Register/></div> : <div><Login/></div>}
					<Button onClick={props.needsRegistration ? props.showSagaLogin : props.showSagaRegister} variant="outlined" className={classes.button}>
						{props.needsRegistration ? <div>Log In</div> : <div>Register</div>}
					</Button>
				</DialogContent>
			</Dialog>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		open: state.auth.open,
		needsRegistration: state.auth.needsRegistration
	}
}

export default connect(mapStateToProps, {showSagaAuthForm, hideSagaAuthForm, showSagaRegister, showSagaLogin})(LoginPage)