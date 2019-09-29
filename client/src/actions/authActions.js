import { CHECK_LOGIN_SAGA, LOGIN_USER, LOGOUT_CURRENT_USER_SAGA, POST_NEW_USER, SET_CURRENT_USER } from './types'

export const registerUserAction = (userData) => {
	return {
		type: POST_NEW_USER,
		payload: userData
	}
}

export const loginUserAction = (userToLogin) => {
	return {
		type: LOGIN_USER,
		payload: userToLogin
	}
}

export const setCurrentUser = (currentUser) => {
	return {
		type: SET_CURRENT_USER,
		payload: currentUser
	}
}
export const checkIfIsLoggedIn = () => {
	return {
		type: CHECK_LOGIN_SAGA,
		payload: localStorage['jwtToken']
	}
}

export const logoutCurrentUser = () => {
	return {
		type: LOGOUT_CURRENT_USER_SAGA
	}
}