import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Login = () => {
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
			<Button color="primary">Log In</Button>
		</div>
	);
};
