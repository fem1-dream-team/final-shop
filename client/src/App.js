import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'typeface-roboto'

import { Home, Page404 } from './components'
import { Footer, Header } from './commons'
import { Products } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Products'
import { SignatureCakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/SignatureCakes'
import { CustomOrders } from './commons/Header/ContainerNavigation/ComponentsForNavigation/CustomOrders'
import { WeddingsCakes } from './commons/Header/ContainerNavigation/ComponentsForNavigation/WeddingCakes'
import { Cart } from './commons/Header/ContainerNavigation/ComponentsForNavigation/Cart'
import { Account } from './commons/Header/ConteinerSearchAccount/Account/Account'

function App () {
	return (
		<BrowserRouter>
			<div>
				<Header/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/products' component={Products}/>
					<Route path='/signatureCakes' component={SignatureCakes}/>
					<Route path='/customOrders' component={CustomOrders}/>
					<Route path='/weddingCakes' component={WeddingsCakes}/>
					<Route path='/cart' render={() => <Cart/>}/>
					<Route path='/account' render={() => <Account/>}/>
					<Route path='*' component={Page404}/>
				</Switch>
				<Footer/>
			</div>
		</BrowserRouter>

	)
}

export default App
