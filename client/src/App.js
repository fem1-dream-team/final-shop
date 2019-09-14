import React, { Component } from 'react'
// import axios from 'axios'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'typeface-roboto'

import { Home, Page404, Products, Cakes } from './components'
import { Footer, Header } from './commons'
// import { Products } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Products'
// import { Cakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/SignatureCakes'
import { CustomOrders } from './commons/Header/ContainerNavigation/ComponentsForNavigation/CustomOrders'
import { WeddingsCakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/WeddingCakes'
import { Cart } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Cart'
import { Account } from './commons/Header/ConteinerSearchAccount/Account/Account'

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
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
