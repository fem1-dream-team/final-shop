import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import 'typeface-roboto'

import { Home } from './components'
import { Footer, Header } from './commons'

import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage';
// import Button from '@material-ui/core/Button';
import { Cakes } from './components/ContainerNavigation/ComponentsForNavigation/Cakes'
import { Tarts } from './components/ContainerNavigation/ComponentsForNavigation/Tarts'
import { Cupcakes } from './components/ContainerNavigation/ComponentsForNavigation/Cupcakes'
import { Biscuits } from './components/ContainerNavigation/ComponentsForNavigation/Biscuits'
import { Cart } from './components/ContainerNavigation/ComponentsForNavigation/Cart'
import { Desserts } from './components/ContainerNavigation/ComponentsForNavigation/Desserts'
import { ContainerNavigation } from './components/ContainerNavigation/ContainerNavigation'

class App extends Component {
	componentDidMount () {
		axios.get('/data')
			.then(res => axios.post('/postData', res)
				.then(console.log))
	}

inputChanged = (param) => {
	console.log(param)
}

render () {
	return (
		<BrowserRouter>

			<div>
				<Header/>
				<ContainerNavigation/>
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/cakes' component={Cakes}/>
					<Route path='/tarts' component={Tarts}/>
					<Route path='/cupcakes' component={Cupcakes}/>
					<Route path='/biscuits' component={Biscuits}/>
					<Route path='/desserts' component={Desserts}/>
					<Route path='/cart' render={() => <Cart/>}/>
					<Route path='/home' render={() => <Cakes/>}/>
					{/* <Route  path='*' component={Page404}/> */}
					<Route exect path='/customer' component={LoginPage}/>
				</Switch>
				<Footer/>
			</div>
		</BrowserRouter>

	)
}
}

export default App
