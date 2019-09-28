import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'is-empty'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { registerUserAction } from '../../../../actions/authActions'

const useStyles = makeStyles(theme => ({
	loading: {
		cursor: 'wait'
	},
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

const Register = (props) => {
	console.log(props)
	const [state, setState] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirm_password: '',
		errors: {}
	})

	const classes = useStyles()

	const onChangeHandler = event => {
		const name = event.target.getAttribute('name')
		const value = event.target.value
		setState({
			...state,
			[name]: value,
		})
	}

	function handleSubmit (event) {
		event.preventDefault()

		const newUser = {
			first_name: state.first_name,
			last_name: state.last_name,
			email: state.email,
			password: state.password,
			confirm_password: state.confirm_password
		}

		props.registerUserAction(newUser)
	}

	const errors = props.errors
	isEmpty(errors) ? console.log('empty') : console.warn(errors)

	return (
		<div>
			<h2>Create your account</h2>
			<div> Please enter your register details</div>
			<form noValidate onSubmit={handleSubmit}>
				<div>
					<TextField
						// className={props.loading ? classes.loading : null}
						margin="dense"
						name="first_name"
						id="first_name"
						placeholder="First Name"
						type="text"
						fullWidth
						variant="outlined"
						value={state.first_name}
						disabled={props.loading}
						onChange={onChangeHandler}
					/>
					{errors.first_name ? <p className={classes.errorMsg}> {errors.first_name} </p> : null}
				</div>
				<div>
					<TextField
						margin="dense"
						name="last_name"
						id="last_name"
						placeholder="Last Name"
						type="text"
						fullWidth
						variant="outlined"
						value={state.last_name}
						disabled={props.loading}
						onChange={onChangeHandler}
					/>
					{errors.last_name ? <p className={classes.errorMsg}> {errors.last_name} </p> : null}
				</div>
				<div>
					<TextField
						margin="dense"
						name="email"
						id="email"
						placeholder="Email address"
						type="email"
						fullWidth
						variant="outlined"
						value={state.email}
						disabled={props.loading}
						onChange={onChangeHandler}
					/>
					{errors.email ? <p className={classes.errorMsg}> {errors.email} </p> : null}
				</div>
				<div>
					<TextField
						margin="dense"
						name="password"
						id="password"
						placeholder="Password. Minimum 8 characters"
						type="password"
						fullWidth
						variant="outlined"
						value={state.password}
						disabled={props.loading}
						onChange={onChangeHandler}
					/>
					{errors.password ? <p className={classes.errorMsg}> {errors.password} </p> : null}
				</div>
				<div>
					<TextField
						margin="dense"
						name="confirm_password"
						id="confirmPassword"
						placeholder="Confirm Password"
						type="password"
						fullWidth
						variant="outlined"
						value={state.confirm_password}
						disabled={props.loading}
						onChange={onChangeHandler}
					/>
					{errors.confirm_password ? <p className={classes.errorMsg}> {errors.confirm_password} </p> : null}
				</div>
				<Button
					type='submit'
					variant="outlined"
					color="primary"
					className={props.loading ? [classes.button, classes.loading] : classes.button}
				>
					Create your	account
				</Button>
			</form>
		</div>
	)
}

Register.propTypes = {
	registerUserAction: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	loading: PropTypes.bool
}

const mapStateToProps = state => ({
	loading: state.general.loading,
	errors: state.general.errors,
	auth: state.auth
})

export default connect(mapStateToProps, { registerUserAction })(withRouter(Register))