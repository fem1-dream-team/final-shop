import {combineReducers} from 'redux';
import authReducer from './authReducer'
import generalReducer from './generalReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	general: generalReducer,
});

export default rootReducer