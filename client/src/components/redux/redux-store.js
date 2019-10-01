import { combineReducers, createStore } from 'redux'
import basketReducer from './shoppingCart-reducer'

const reducers = combineReducers({
	productsBasket: basketReducer,
})

const store = createStore(reducers);

export default store