import {combineReducers} from 'redux';
import authReducer from './authReducer'
import errorReducer from './errorReducer'
// import {authFormReducer} from '../actions/sagaAuthForm'

const rootReducer = combineReducers({
	auth: authReducer,
	errors: errorReducer,
	// authForm: authFormReducer,
});

export default rootReducer
