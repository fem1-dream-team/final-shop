import {combineReducers} from 'redux';
import authReducer from './authReducer'
import productsReducer from './productsReducer'
import generalReducer from './generalReducer'
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	products: productsReducer,
	general: generalReducer,
	productsBasket: basketReducer,
});
export default rootReducer