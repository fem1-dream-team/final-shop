import {
	SET_CURRENT_USER,
	SHOW_AUTH_FORM,
	SHOW_REGISTER,
} from '../actions/types'

const isEmpty = require('is-empty');

const initialState = {
	isAuth: false,
	customer: {},
	open: false,
	needsRegistration: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_CURRENT_USER:
		return {
			...state,
			isAuth: !isEmpty(action.payload),
			customer: action.payload
		};
	case SHOW_AUTH_FORM: {
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
	default:
		return state
	}
};

export default authReducer