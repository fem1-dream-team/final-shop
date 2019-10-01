import {combineReducers} from 'redux';
import authReducer from './authReducer'
import productsReducer from './productsReducer'
import generalReducer from './generalReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	products: productsReducer,
	general: generalReducer,
});
export default rootReducer