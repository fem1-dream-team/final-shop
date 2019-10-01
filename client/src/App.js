import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { checkIfIsLoggedIn } from './actions/authActions'
import 'typeface-roboto'
import {Home, Page404, Profile} from './components'

// import {SimpleSlider} from './components'
import { Header } from './commons'
import { Cart } from './components/ComponentsForNavigation/Cart'

import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage'
// import Button from '@material-ui/core/Button';
import { ContainerNavigation } from './commons/ContainerNavigation/ContainerNavigation'
import PersonalInfo from './components/Profile/PersonalInfo/PersonalInfo';
import { connect } from 'react-redux'
import { getProductCategories } from './actions/productsActions'
import Products from './components/Products/Products'
import ProductDetailed from './components/Products/ProductDetailed'
import {Footer} from './commons/Footer/Footer'

const App = (props) => {
	return (
		<BrowserRouter>
			<div auth={props.checkIfIsLoggedIn()}>
				<Header/>
				<ContainerNavigation/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/home' render={() => <Home/>} />

					<Route path='/search' component={Products}	/>
					<Route path='/cakes'	component={Products} />
					<Route path='/tarts'	component={Products} />
					<Route path='/cupcakes'	component={Products} />
					<Route path='/cookies'	component={Products} />
					<Route path='/desserts'	component={Products} />
					<Route path='/macaroons'	component={Products} />

					<Route path='/:productId'	component={ProductDetailed} />

					<Route path='/cart' render={() => <Cart/>}/>
					<Route exect path='/customer' component={LoginPage}/>

					<Route exect path='/profile' component={Profile}/>

					<Route exect path='/profile/personal-information/' component={PersonalInfo}/>
					{/* <Route exect path='/profile/basket' component={Profile}/> */}
					<Route exect path='/profile' component={Profile}/>

					<Route path='*' component={Page404}/>
				</Switch>

				<Footer/>
			</div>
		</BrowserRouter>
	)
}

const mapStateToProps = state => {
	return {

	}
}

export default connect(mapStateToProps, {checkIfIsLoggedIn, getProductCategories})(App)
