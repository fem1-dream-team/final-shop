import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import isEmpty from 'is-empty'
import { loginUserAction } from '../../../../actions/authActions'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	errorMsg: {
		marginTop: 0,
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 12,
		color: 'red'
	}

}))
const Login = (props) => {
	const classes = useStyles()
	const [state, setState] = useState({
		email: '',
		password: '',
		// formErrors: { email: '', password: '' },
		// emailValid: false,
		// passwordValid: false,
		// formValid: false,
		errors: {}
	})

	const onChangeHandler = event => {
		const name = event.target.getAttribute('name')
		const value = event.target.value
		setState({
			...state,
			[name]: value,
		})
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userToLogin = {
			email: state.email,
			password: state.password
		}

		console.log(userToLogin)
		props.loginUserAction(userToLogin)
	}

	const errors = props.errors
	isEmpty(errors) ? console.log('empty') : console.warn(errors)

	return (
		<div>
			<h2>Log In</h2>
			<div> Please enter your account details</div>
			<form noValidate onSubmit={onSubmit}>
				<div>
					<TextField
						autoFocus
						margin="dense"
						name="email"
						id="email"
						placeholder="Email address"
						type="email"
						fullWidth
						variant="outlined"
						value={state.email}
						onChange={onChangeHandler}
					/>
					{errors.email ? <p className={classes.errorMsg}> {errors.email} </p> : null}
				</div>
				<div>
					<TextField
						margin="dense"
						name="password"
						id="password"
						placeholder="Password"
						type="password"
						fullWidth
						variant="outlined"
						value={state.password}
						onChange={onChangeHandler}
					/>
					{errors.password ? <p className={classes.errorMsg}> {errors.password} </p> : null}
				</div>
				<Button variant="outlined" color="primary" className={classes.button} onClick={onSubmit}>Log In</Button>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		errors: state.errors
	}
}
// export default Login
export default connect(mapStateToProps, {loginUserAction})(Login)
// export default connect(mapStateToProps, {})(Login)