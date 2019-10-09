import React from 'react';
import {connect} from 'react-redux';

import {Button, Dialog, DialogContent, makeStyles} from '@material-ui/core';

import Register from './Register';
import Login from './Login';
import {showAuthForm, showRegister} from '../../../../actions/authFormActions';

const AuthFormModal = props => {
	const classes = useStyles();

	return (
		<Dialog
			open={props.open}
			className={props.loading ? classes.loading : null}
			onClose={ () => { props.showAuthForm(false) } }
			scroll='paper'
			aria-labelledby="form-dialog-title"
		>
			<DialogContent>
				{props.needsRegistration ? <Register/> : <Login/>}
				<Button
					onClick={ props.needsRegistration
						? () => { props.showRegister(false) }
						: () => { props.showRegister(true) }
					}
					className={props.loading ? classes.buttonOnLoading : classes.button}
					variant="outlined"
				>
					{props.needsRegistration ? <div>Log In</div> : <div>Register</div>}
				</Button>
			</DialogContent>
		</Dialog>
	)
};

const mapStateToProps = state => {
	return {
		loading: state.general.loading,
		open: state.auth.open,
		needsRegistration: state.auth.needsRegistration,
		isAuth: state.auth.isAuth,
	}
};

export default connect(mapStateToProps, { showAuthForm, showRegister })(AuthFormModal)

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		borderRadius: 17,
		backgroundColor: '#f186a0'
	},
	buttonOnLoading: {
		margin: theme.spacing(1),
		borderRadius: 17,
		backgroundColor: '#f186a0',
		cursor: 'wait'
	},
	loading: {
		cursor: 'wait'
	},
}));