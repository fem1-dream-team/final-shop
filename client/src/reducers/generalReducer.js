import {CLEAR_ERRORS, GET_ERRORS, IS_LOADING, SHOW_NAVBAR} from '../actions/types'

const initialState = {
	isLoading: false,
	errors: {},
	navbar: false,
}

const generalReducer = (state = initialState, action) => {
	switch (action.type) {
	case IS_LOADING:
		return {
			...state,
			loading: action.payload
		};
	case GET_ERRORS:
		return {
			...state,
			errors: action.payload
		}
	case CLEAR_ERRORS:
		return {
			...state,
			errors: action.payload
		}
	case SHOW_NAVBAR:
		return {
			...state,
			navbar: action.payload,
		}
	default:
		return state
	}
}

export default generalReducer