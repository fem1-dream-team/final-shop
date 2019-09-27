import React, { useState} from 'react';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { registerUser } from '../../../../actions/authActions'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const Register = (props) => {
	console.log(props);
	const [state, setState] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirm_password: '',
		errors: {}
	});

	const classes = useStyles();

	const onChangeHandler = event => {
		const name = event.target.getAttribute('name');
		const value = event.target.value;
		setState({
			...state,
			[name]: value,
		});
	};

	function handleSubmit (event) {
		event.preventDefault();

		const newUser = {
			first_name: state.first_name,
			last_name: state.last_name,
			email: state.email,
			password: state.password,
			confirm_password: state.confirm_password
		};

		props.registerUser(newUser);
	}

	return (
		<div>
			<h2>Create your account</h2>
			<div> Please enter your register details </div>
			<form noValidate onSubmit={handleSubmit}>
				<TextField
					margin="dense"
					name="first_name"
					id="first_name"
					placeholder="First Name"
					type="text"
					fullWidth
					variant="outlined"
					value={state.first_name}
					error={state.errors.first_name}
					onChange={onChangeHandler}
				/>
				<TextField
					margin="dense"
					name="last_name"
					id="last_name"
					placeholder="Last Name"
					type="text"
					fullWidth
					variant="outlined"
					value={state.last_name}
					error={state.errors.last_name}
					onChange={onChangeHandler}
				/>
				<TextField
					margin="dense"
					name="email"
					id="email"
					placeholder="Email address"
					type="email"
					fullWidth
					variant="outlined"
					value={state.email}
					error={state.errors.email}
					onChange={onChangeHandler}
				/>
				<TextField
					margin="dense"
					name="password"
					id="password"
					placeholder="Password. Minimum 8 characters"
					type="password"
					fullWidth
					variant="outlined"
					value={state.password}
					error={state.errors.password}
					onChange={onChangeHandler}
				/>
				<TextField
					margin="dense"
					name="confirm_password"
					id="confirmPassword"
					placeholder="Confirm Password"
					type="password"
					fullWidth
					variant="outlined"
					value={state.confirm_password}
					error={state.errors.confirm_password}
					onChange={onChangeHandler}
				/>
				<Button type='submit' variant="outlined" color="primary" className={classes.button}> Create your account</Button>
			</form>
		</div>
	);
};

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));