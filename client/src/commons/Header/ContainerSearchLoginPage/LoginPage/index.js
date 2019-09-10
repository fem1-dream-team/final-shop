import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Register from './Register';
import {Login} from './Login';

import {Route, Link, Switch} from 'react-router-dom';

const LoginPage = (props) => {
	const [open, setOpen] = useState(false);
	const [state] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: ''
	});

	function handleClickOpen () {
		setOpen(true);
	}

	//= ==
	function handleClose () {
		setOpen(false);
	}
	//= ==
	function logIn () {
		console.log(state);
		handleClose();
	}
	function createNewAcc () {
		alert('Create your account');
		handleClose();
	}

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
Log In
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Log In</DialogTitle>
				<DialogContent>
					<DialogContentText color="inherit">
Please enter your account details
					</DialogContentText>
					<div>
						<Login/>
						<Register/>
						<Link to={'/register'}> Register new user</Link>
					</div>
					<Switch>
						<Route path='/register' component={Register}/>
					</Switch>
				</DialogContent>
				<DialogActions>
					<Button onClick={logIn} color="primary">
Log In
					</Button>
					<Button onClick={createNewAcc} color="inherit">
Create your account
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default LoginPage;