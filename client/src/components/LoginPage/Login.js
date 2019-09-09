import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Login = () => {
    const [open, setOpen] = useState(false);

    const [state, setState] = useState({
	    email: "",
	    password: "",
	    confirmPassword: "",
	    firstName: "",
	    lastName: ""
    });

	const onChangeHandler = event =>{
		const name = event.target.getAttribute("name"); /*event.target.name - то же самоe но первое понятнее написано. Вопрос стилистики написания кода*/
		const value = event.target.value;
		setState({
			...state,
			[name]: value, /*[name] - квадратные скобки переписывают занчение ключа name.*/
		});
	};


	function handleClickOpen() {
        setOpen(true);
    }

	//===
    function handleClose() {
	    setOpen(false);
    }
    //===
    function logIn() {
	    console.log(state);
	    handleClose();
    }
    function createNewAcc() {
        alert("Create your account");
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

export default Login;