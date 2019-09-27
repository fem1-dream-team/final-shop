
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/login'

const initialState = {
	isLogin: false,
	loginData: {
		// id: '',
		email: '',
		last_name: '',
		first_name: '',
	},
};

function login(state = initialState, action) {

	switch (action.type) {
		case LOGIN_SUCCESS:
			return {...state,
				isLogin: true,
			};
		case LOGIN_FAIL:
			return {...state,

			};
		default:
			return {...state}

	}
}

export default login