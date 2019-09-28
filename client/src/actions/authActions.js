import { LOGIN_USER, POST_NEW_USER, SET_CURRENT_USER } from './types'

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