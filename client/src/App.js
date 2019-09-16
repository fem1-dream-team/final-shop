import React, { Component } from 'react'
// import axios from 'axios'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'typeface-roboto'

import {Home, Products, SimpleSlider} from './components'
import { Footer, Header } from './commons'
import { Categories} from './components';

import { Cakes } from './components/ComponentsForNavigation/Cakes/Cakes'
import { Biscuits } from './components/ComponentsForNavigation/Biscuits'
import { Cupcakes } from './components/ComponentsForNavigation/Cupcakes'
import { Desserts } from './components/ComponentsForNavigation/Desserts'
import { Tarts } from './components/ComponentsForNavigation/Tarts'

import { Cart } from './components/ComponentsForNavigation/Cart'

import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage';
// import Button from '@material-ui/core/Button';
import { ContainerNavigation } from './commons/ContainerNavigation/ContainerNavigation'

class App extends Component {
	// initialize our state
	state = {
		data: [],
		id: 0,
		message: null,
		intervalIsSet: false,
		idToDelete: null,
		idToUpdate: null,
		objectToUpdate: null,
	};

	componentDidMount () {
		// axios.get('http://localhost:3001/api/getData');
	}

	inputChanged = (param) => {
		console.log(param)
	};

	render () {
		return (
			<BrowserRouter>
				<div>
					<Header/>
					<ContainerNavigation/>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/home' render={() => <Home/>}/>
						<Route
							path='/cakes'
							component={props => <Products {...props} category={'cakes'} />}
						/>
						<Route
							path='/tarts'
							component={props => <Products {...props} category={'tarts'} />}
						/>
						<Route path='/cupcakes' component={Cupcakes}/>
						<Route path='/biscuits' component={Biscuits}/>
						<Route path='/desserts' component={Desserts}/>
						<Route path='/cart' render={() => <Cart/>}/>
						{/* <Route  path='*' component={Page404}/> */}
						<Route exect path='/customer' component={LoginPage}/>

					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
