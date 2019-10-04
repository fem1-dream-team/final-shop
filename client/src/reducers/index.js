import {combineReducers} from 'redux';
import authReducer from './authReducer'
import productsReducer from './productsReducer'
import generalReducer from './generalReducer'
import basketReducer from './basketReducer'
// import {formRed} from './formReducer'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	auth: authReducer,
	products: productsReducer,
	general: generalReducer,
	basket: basketReducer,
	form: formReducer,
});
export default rootReducer