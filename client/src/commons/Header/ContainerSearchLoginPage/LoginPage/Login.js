import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import connect from "react-redux/lib/connect/connect";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},

}));

const mapStateToProps = (state)=>{
	console.log(state);
	return state;
};


export const Login = connect(mapStateToProps)(props => {
	const classes = useStyles();
	const [state, setState] = useState({
		email: '',
		password: '',
		formErrors: {email: '', password: ''},
		emailValid: false,
		passwordValid: false,
		formValid: false
	});

	const onChangeHandler = event => {
		const name = event.target.getAttribute('name');
		const value = event.target.value;
		setState({
			...state,
			[name]: value,
		});
	};

	const onSubmit = () => {
		console.log(state);
	}

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
				<div>
				</div>
				<Button variant="outlined" color="primary" className={classes.button} onClick={onSubmit}>Log In</Button>
			</form>
		</div>
	);
});