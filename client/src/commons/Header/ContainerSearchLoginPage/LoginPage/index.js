import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Register from './Register';
import {Login} from './Login';

import {NavLink} from 'react-router-dom';
import login from '../userLoginPage.png';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},

}));

const LoginPage = (props) => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = useState(false);
	
	function toggleState () {
		setIsOpen(!isOpen);
		console.log('Is Open: ' + isOpen);
	}
	
	function handleClickOpen () {
		setOpen(true);
	}

	function handleClose (props) {
		setOpen(false);
		window.location = '/';
	}

	return (
		<div>
			<NavLink to='/customers' ><img src={login} onClick={handleClickOpen} alt='login' style={{width: '25px', height: '25 px'}}/></NavLink>
			<Dialog open={open} scroll='paper' onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogContent>
					{
						isOpen
							? <div>
								<Register/>
							</div>
							:							<div>
								<Login/>
							</div>
					}
					<Button onClick={toggleState} variant="outlined" className={classes.button}>
						{
							isOpen
								?						<div>Log In</div>
								:						<div>Register</div>
						}
					</Button>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default LoginPage;