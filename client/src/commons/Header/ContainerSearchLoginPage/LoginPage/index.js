import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Register from './Register';
import {Login} from './Login';
import {makeStyles} from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

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
	greeting: {
		color: '#fff',
	},
}));

const LoginPage = () => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = useState(false);

	function toggleState () {
		setIsOpen(!isOpen);
	}
	
	function handleClickOpen () {
		setOpen(true);
	}

	function handleClose () {
		setOpen(false);
	}
	//= ===
	const [lola, setLola] = useState(
		{name: ''}
	);
	const updateData = (value) => {
		setLola({name: value})
	};

	//= ===
	return (
		<div>

			{lola.name
				? <div>
					<ExitToAppOutlinedIcon
						className={classes.icon}
						onClick={
							() => {
								setLola({
									...lola,
									name: ''
								});
							}} />
					<span className={classes.greeting}> Hello, {lola.name}</span>
				</div>
				:				<AccountCircleOutlinedIcon className={classes.icon} onClick={handleClickOpen}/>
			}
			<Dialog open={open} scroll='paper' onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogContent>
					{
						isOpen
							? <div>
								<Register updateData={updateData} listNameOfData={lola} handleClose={handleClose}/>
							</div>
							:							<div>
								<Login updateData={updateData} listNameOfData={lola} handleClose={handleClose}/>
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