import React, { useState } from 'react';
// import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import RaisedButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
export const Register =(props)=> {
		const [state, setState] =useState( {
			first_name:'',
			last_name:'',
			email:'',
			password:''
		});
		return (
			<div>
				<AppBar
					title="Register"
				/>
				<TextField
					hintText="Enter your First Name"
					floatingLabelText="First Name"
					onChange = {(event,newValue) => setState({first_name:newValue})}
				/>
				<br/>
				<TextField
					hintText="Enter your Last Name"
					floatingLabelText="Last Name"
					onChange = {(event,newValue) => setState({last_name:newValue})}
				/>
				<br/>
				<TextField
					hintText="Enter your Email"
					type="email"
					floatingLabelText="Email"
					onChange = {(event,newValue) => setState({email:newValue})}
				/>
				<br/>
				<TextField
					type = "password"
					hintText="Enter your Password"
					floatingLabelText="Password"
					onChange = {(event,newValue) => setState({password:newValue})}
				/>
				<br/>
				<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
			</div>
		);
}
const style = {
	margin: 15,
};


export default Register;