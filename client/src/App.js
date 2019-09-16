import React, { Component } from 'react'
// import axios from 'axios'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'typeface-roboto'
<<<<<<< Updated upstream

import { Home, Page404, Products, Cakes } from './components'
import { Footer, Header } from './commons'
// import { Products } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Products'
// import { Cakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/SignatureCakes'
import { CustomOrders } from './commons/Header/ContainerNavigation/ComponentsForNavigation/CustomOrders'
import { WeddingsCakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/WeddingCakes'
import { Cart } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Cart'
import { Account } from './commons/Header/ConteinerSearchAccount/Account/Account'
=======
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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
		// this.getDataFromDb();
		// if (!this.state.intervalIsSet) {
		// 	let interval = setInterval(this.getDataFromDb, 1000);
		// 	this.setState({ intervalIsSet: interval });
		// }
	}

	componentWillUnmount () {
		// if (this.state.intervalIsSet) {
		// 	clearInterval(this.state.intervalIsSet);
		// 	this.setState({ intervalIsSet: null });
		// }
	}

	getDataFromDb = () => {
		fetch('http://localhost:3001/api/getData')
			.then((data) => data.json())
			.then((res) => this.setState({ data: res.product }));
	};

	render () {
		const { data } = this.state;
		return (
			<BrowserRouter>

				<div>
					<Header/>
					<div>
						{/* <Link to={'/'}> Home </Link> */}
						{/* <Link to={'/profile'}> Profile </Link> */}
					</div>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/products' component={Products}/>
						<Route path='/cakes' component={Cakes}/>
						<Route path='/customOrders' component={CustomOrders}/>
						<Route path='/weddingCakes' component={WeddingsCakes}/>
						<Route path='/cart' render={() => <Cart/>}/>
						<Route path='/account' render={() => <Account/>}/>
						<Route path='*' component={Page404}/>
=======
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

>>>>>>> Stashed changes
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
<<<<<<< Updated upstream
		);
=======
		)
>>>>>>> Stashed changes
	}
}

export default App;
