import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { checkIfIsLoggedIn } from './actions/authActions'
import {handleNavbar} from './actions/generalActions';

import 'typeface-roboto'

import Navbar from './components/navbar/Navbar';
import GlobalStyle from './styles/Global';

import {Home, Page404, Profile} from './components'
// import {SimpleSlider} from './components'
import { Footer, Header } from './commons'
import { Cart } from './components/ComponentsForNavigation/Cart'

import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage'
// import Button from '@material-ui/core/Button';
import PersonalInfo from './components/Profile/PersonalInfo/PersonalInfo';
import { getProductCategories } from './actions/productsActions'
import Products from './components/Products/Products'

const App = (props) => {
	return (
		<BrowserRouter>
			<div auth={props.checkIfIsLoggedIn()}>
				<Header/>
				<Navbar
					navbarState={props.navbarState}
					handleNavbar={props.handleNavbar}
				/>
				<GlobalStyle />
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
};

const mapStateProps = state => {
	return {
		navbarState: state.general.navbarState,
	}
};

export default connect(mapStateToProps, {checkIfIsLoggedIn, getProductCategories})(App)

