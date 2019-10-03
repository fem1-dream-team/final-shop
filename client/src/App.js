import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import {checkIfIsLoggedIn} from './actions/authActions'

import 'typeface-roboto'

import Navbar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'

import {Home, Page404} from './components'
import Profile from './components/Profile/Profile'
import {Header} from './commons'
import {Cart} from './components/ComponentsForNavigation/Cart'

import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage'
import Products from './components/Products/Products'
import ProductDetailed from './components/Products/ProductDetailed'
import Footer from './commons/Footer/Footer'

const App = (props) => {
	useEffect(() => {
		props.checkIfIsLoggedIn();
		// eslint-disable-next-line
	}, [])

	return (
		<BrowserRouter>
			<div>
				<Header/>
				<Navbar/>
				<GlobalStyle/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/home' render={() => <Home/>}/>

					<Route path='/search' component={Products}/>
					<Route exact path='/yummy/:categoryName' component={Products}/>
					<Route exact path='/yummy/detailed/:detailedPath' component={ProductDetailed}/>

					<Route path='/cart' render={() => <Cart/>}/>
					<Route exect path='/customer' component={LoginPage}/>
					<Route exact path='/profile/:profileInfo' component={Profile}/>
					<Route path='*' component={Page404}/>
				</Switch>

				<Footer/>
			</div>
		</BrowserRouter>
	)
}

const mapStateToProps = () => {
	return {}
}

export default connect(mapStateToProps, {checkIfIsLoggedIn})(App)
