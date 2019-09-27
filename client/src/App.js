import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from './styles/Global';


import store from './store';
import 'typeface-roboto'
import {Home, Page404, Products} from './components';
// import {SimpleSlider} from './components'
import {Footer, Header} from './commons'
import {Cart} from './components/ComponentsForNavigation/Cart'

import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage';
// import Button from '@material-ui/core/Button';
import {ContainerNavigation} from './commons/ContainerNavigation/ContainerNavigation';

class App extends Component {
	state = {
		navbarOpen: false
	};

	handleNavbar = () => {
		this.setState({ navbarOpen: !this.state.navbarOpen });
	};
	render () {
		return (
			<Provider store={store}>



				<BrowserRouter>
					<div>
						<Header/>
						<Navbar
								navbarState={this.state.navbarOpen}
								handleNavbar={this.handleNavbar}
							/>
							<GlobalStyle />
						<ContainerNavigation/>
						<Switch>
							<Route exact path='/' component={Home}/>
							<Route path='/home' render={() => <Home/>}/>

							<Route
								path='/search'
								component={props => <Products {...props} category={'search'}/>}
							/>

							<Route
								path='/cakes'
								component={props => <Products {...props} category={'cakes'}/>}
							/>
							<Route
								path='/tarts'
								component={props => <Products {...props} category={'tarts'}/>}
							/>

							<Route
								path='/cupcakes'
								component={props => <Products {...props} category={'cupcakes'}/>}
							/>

							<Route
								path='/cookies'
								component={props => <Products {...props} category={'cookies'}/>}
							/>

							<Route
								path='/desserts'
								component={props => <Products {...props} category={'desserts'}/>}
							/>

							<Route
								path='/macaroons'
								component={props => <Products {...props} category={'macaroons'}/>}
							/>

							<Route path='/cart' render={() => <Cart/>}/>
							<Route exect path='/customer' component={LoginPage}/>
							<Route path='*' component={Page404}/>

						</Switch>

						<Footer/>
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App
