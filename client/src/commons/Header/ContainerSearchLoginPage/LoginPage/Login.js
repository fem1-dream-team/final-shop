import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},

}));
export const Login = () => {
	const classes = useStyles();
	const [state, setState] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: ''
	});

	const onChangeHandler = event => {
		const name = event.target.getAttribute('name');
		const value = event.target.value;
		setState({
			...state,
			[name]: value,
		});
	};

	return (
		<div>
			<h2>Log In</h2>
			<div> Please enter your account details </div>
			<form>
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
				<Button variant="outlined" color="primary" className={classes.button}>Log In</Button>
			</form>
		</div>
	);
};
