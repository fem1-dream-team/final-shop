import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import 'typeface-roboto'
import { Home } from './components'
import { Footer, Header } from './commons'
import { Cakes } from './components/ComponentsForNavigation/Cakes/Cakes'
import { Macaroons } from './components/ComponentsForNavigation/Macaroons/Macaroons'
import { Cart } from './components/ComponentsForNavigation/Cart'
import { Cupcakes } from './components/ComponentsForNavigation/Cupcakes/Cupcakes'
import { Desserts } from './components/ComponentsForNavigation/Desserts'
import { Tarts } from './components/ComponentsForNavigation/Tarts'
import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage';
import { ContainerNavigation } from './commons/ContainerNavigation/ContainerNavigation'
import { ProductDescriptionForBuy } from './components/ProductDescriptionForBuy/ProductDescriptionForBuy'

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
						<Route exact path='/' component={Home}/>

						<Route exact path='/cakes' component={Cakes}/>
						<Route path='/tarts' component={Tarts}/>
						<Route path='/cupcakes' component={Cupcakes}/>
						<Route path='/macaroons' component={Macaroons}/>
						<Route path='/desserts' component={Desserts}/>

						<Route path='/cakes/buy/:id' component={ProductDescriptionForBuy}/>

						<Route path='/cart' render={() => <Cart/>}/>

						<Route exact path='/' render={() => <Cakes/>}/>

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
