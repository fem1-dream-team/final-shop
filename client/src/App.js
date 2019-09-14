import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import 'typeface-roboto'
import { Home, Page404 } from './components'
import { Footer, Header } from './commons'
import { Cakes } from './components/ComponentsForNavigation/Cakes/Cakes'
import { Biscuits } from './components/ComponentsForNavigation/Biscuits'
import { Cart } from './components/ComponentsForNavigation/Cart'
import { Cupcakes } from './components/ComponentsForNavigation/Cupcakes'
import { Desserts } from './components/ComponentsForNavigation/Desserts'
import { Tarts } from './components/ComponentsForNavigation/Tarts'
import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage';
// import Button from '@material-ui/core/Button';
import { ContainerNavigation } from './commons/ContainerNavigation/ContainerNavigation'

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
