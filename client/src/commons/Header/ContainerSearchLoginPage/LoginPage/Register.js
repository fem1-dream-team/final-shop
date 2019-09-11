import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},

}));

const Register = (props) => {
	const [state, setState] = useState({
		password: '',
		login: '',
		email: '',
		last_name: '',
		first_name: '',
	});
	const classes = useStyles();
	function registrationSubmit (e) {
		e.preventDefault();
		console.log(state);
	}

	const onChangeHandler = event => {
		const name = event.target.getAttribute('name');
		const value = event.target.value;
		setState({
			...state,
			[name]: value,
		});
	};

	function handleSubmit (event) {
		alert('A name was submitted:');
		event.preventDefault();
	}

	return (
		<div>
			<h2>Create your account</h2>
			<div> Please enter your register details </div>
			<form onSubmit={handleSubmit}>
				<TextField
					autoFocus
					margin="dense"
					name="login"
					id="login"
					placeholder="Login"
					type="text"
					fullWidth
					variant="outlined"
					value={state.login}
					onChange={onChangeHandler}
				/>
				<TextField
					margin="dense"
					name="first_name"
					id="first_name"
					placeholder="First Name"
					type="text"
					fullWidth
					variant="outlined"
					value={state.first_name}
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
					onChange={onChangeHandler}
				/>
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
				<TextField
					margin="dense"
					name="password"
					id="confirmPassword"
					placeholder="Confirm Password"
					type="password"
					fullWidth
					variant="outlined"
				/>
				<Button variant="outlined" color="primary" className={classes.button} onClick={registrationSubmit}> Create your account</Button>
			</form>
		</div>
	);
};

export default Register;