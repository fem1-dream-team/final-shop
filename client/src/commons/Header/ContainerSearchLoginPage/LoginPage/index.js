import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Register from './Register';
import {Login} from './Login';
import {makeStyles} from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		borderRadius: 17,
		backgroundColor: '#f186a0'
	},
	icon: {
		width: 25,
		height: 25,
		color: '#fff',
		cursor: 'pointer'
	},

}));

const LoginPage = (props) => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = useState(false);
	
	function toggleState () {
		setIsOpen(!isOpen);
	}
	
	function handleClickOpen () {
		setOpen(true);
	}

	function handleClose (props) {
		setOpen(false);
		// window.location = '/';
	}

	return (
		<div>
			<AccountCircleOutlinedIcon className={classes.icon} onClick={handleClickOpen}/>
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