import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'typeface-roboto'

import { Home } from './components'
import { Footer, Header } from './commons'
import { Products } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Products'
import { SignatureCakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/SignatureCakes'
import { CustomOrders } from './commons/Header/ContainerNavigation/ComponentsForNavigation/CustomOrders'
import { WeddingsCakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/WeddingCakes'
import { Cart } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Cart'
import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage';

class App extends Component {
// 	componentDidMount () {
// 		axios.get('/data')
// 			.then(res => axios.post('/postData', res)
// 				.then(console.log))
// 	}
//
// inputChanged = (param) => {
// 	console.log(param)
// }

	render () {
		return (
			<BrowserRouter>
				<div>
					<Header/>
					<Switch>
						<Route path='/' exact component={Home}/>
						<Route path='/products' component={Products}/>
						<Route path='/signatureCakes' component={SignatureCakes}/>
						<Route path='/customOrders' component={CustomOrders}/>
						<Route path='/weddingCakes' component={WeddingsCakes}/>
						<Route path='/cart' render={() => <Cart/>}/>
						{/* <Route  path='*' component={Page404}/> */}
						<Route path='/customer' component={LoginPage}/>
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
