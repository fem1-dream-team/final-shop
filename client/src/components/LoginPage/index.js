import React from "react";

import Login from "./Login";
import Register from "./Register";

import {Route, Link, Switch} from "react-router-dom";

 const LoginPage = (props) =>{
	return (
		<div>
			<div>
				<Link to={'/'}>Log In</Link>
				<Link to={'/register'}> Register new user</Link>
			</div>
			<Switch>
				<Route exact path='/' component={Login}/>
				<Route path='/register' component={Register}/>
			</Switch>
		</div>
	)
};

export default LoginPage;