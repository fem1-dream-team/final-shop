import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { loginUserAction } from '../../../../actions/authActions'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	loading: {
		cursor: 'wait'
	},
	buttonOnLoading: {
		margin: theme.spacing(1),
		cursor: 'wait'
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

		props.loginUserAction(userToLogin)
	}

	const errors = props.errors

	const loginFields = [
		{
			id: 'email',
			placeholder: 'Email',
			value: state.email,
			errors: errors.email
		},
		{
			id: 'password',
			placeholder: 'Password. Minimum 8 characters',
			type: 'password',
			errors: errors.password
		}]

	return (
		<div>
			<h2>Log In</h2>
			<div> Please enter your account details</div>
			<form noValidate onSubmit={onSubmit}>
				{loginFields.map(field => {
					return (
						<div key={field.id}>
							<TextField
								margin="dense"
								name={field.id}
								id={field.id}
								placeholder={field.placeholder}
								type={field.id}
								fullWidth
								variant="outlined"
								value={field.value}
								disabled={props.loading}
								onChange={onChangeHandler}
							/>
							{field.errors ? <p className={classes.errorMsg}> {field.errors} </p> : null}
						</div>
					)
				})}
				<Button
					variant="outlined"
					type='submit'
					color="primary"
					className={props.loading ? classes.buttonOnLoading : classes.button}
				> Log In </Button>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		loading: state.general.loading,
		errors: state.general.errors
	}
}
// export default Login
export default connect(mapStateToProps, { loginUserAction })(Login)
// export default connect(mapStateToProps, {})(Login)