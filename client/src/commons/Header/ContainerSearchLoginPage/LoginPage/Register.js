import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Register = (props) => {
	const [state, setState] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	});
	return (
		<div>
			<TextField
				autoFocus
				margin="dense"
				name="firstName"
				id="firstName"
				placeholder="First Name"
				type="text"
				fullWidth
				variant="outlined"
				value={state.firstName}
			/>
			<TextField
				margin="dense"
				name="lastName"
				id="lastName"
				placeholder="Last Name"
				type="text"
				fullWidth
				variant="outlined"
				value={state.lastName}
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
			/>
			<Button color="primary"> Create your account</Button>
		</div>
	);
};

export default Register;