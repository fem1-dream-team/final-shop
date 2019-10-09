import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { registerUserAction } from '../../../../actions/authActions'

import { makeStyles, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	loading: {
		cursor: 'wait'
	},
	button: {
		margin: theme.spacing(1),
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

const Register = (props) => {
	const classes = useStyles()

	const [state, setState] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirm_password: '',
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

	const registerFields = [
		{
			id: 'first_name',
			placeholder: 'First name',
			type: 'text',
			value: state.first_name,
			errors: errors.first_name
		},
		{
			id: 'last_name',
			placeholder: 'Last name',
			type: 'text',
			value: state.last_name,
			errors: errors.last_name
		},
		{
			id: 'email',
			placeholder: 'Email',
			type: 'email',
			value: state.email,
			errors: errors.email
		},
		{
			id: 'password',
			placeholder: 'Password',
			type: 'password',
			value: state.password,
			errors: errors.password
		},
		{
			id: 'confirm_password',
			placeholder: 'Confirm password',
			type: 'password',
			value: state.confirm_password,
			errors: errors.confirm_password
		},

	]

	return (
		<div>
			<h2>Create your account</h2>
			<div> Please enter your register details</div>

			<form noValidate onSubmit={handleSubmit}>

				{registerFields.map((field) => {
					return (
						<div key={field.id}>
							<TextField
								margin="dense"
								name={field.id}
								id={field.id}
								placeholder={field.placeholder}
								type={field.type}
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
					type='submit'
					variant="outlined"
					color="primary"
					className={props.loading ? classes.buttonOnLoading : classes.button}
				> Create your account	</Button>
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