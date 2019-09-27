import {
	HIDE_AUTH_FORM,
	SET_CURRENT_USER,
	SHOW_AUTH_FORM,
	SHOW_LOGIN,
	SHOW_REGISTER,
	USER_LOADING
} from '../actions/types'

const isEmpty = require('is-empty');

const initialState = {
	isAuth: false,
	customer: {},
	loading: false,
	open: false,
	needsRegistration: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_CURRENT_USER:
		return {
			...state,
			isAuth: !isEmpty(action.payload),
			user: action.payload
		};
	case USER_LOADING:
		return {
			...state,
			loading: true
		};
	case SHOW_AUTH_FORM: {
		return {
			...state,
			open: action.payload
		}
	}
	case HIDE_AUTH_FORM: {
		return {
			...state,
			open: action.payload
		}
	}
	case SHOW_REGISTER: {
		return {
			...state,
			needsRegistration: action.payload
		}
	}
	case SHOW_LOGIN: {
		return {
			...state,
			needsRegistration: action.payload
		}
	}
	default:
		return state
	}
};

export default authReducer