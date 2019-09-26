import { all, take, put } from 'redux-saga/effects'
import {
	HIDE_AUTH_FORM,
	HIDE_SAGA_AUTH_FORM,
	SHOW_AUTH_FORM, SHOW_LOGIN, SHOW_REGISTER,
	SHOW_SAGA_AUTH_FORM,
	SHOW_SAGA_LOGIN,
	SHOW_SAGA_REGISTER
} from './types'
import { postNewUserSaga } from './authActions'

export const showSagaAuthForm = () => {
	return {
		type: SHOW_SAGA_AUTH_FORM
	}
}

export const hideSagaAuthForm = () => {
	return {
		type: HIDE_SAGA_AUTH_FORM
	}
}
export const showSagaRegister = () => {
	return {
		type: SHOW_SAGA_REGISTER
	}
}
export const showSagaLogin = () => {
	return {
		type: SHOW_SAGA_LOGIN
	}
}

function * showAuthFormSaga () {
	while (true) {
		yield take(SHOW_SAGA_AUTH_FORM)
		yield put({
			type: SHOW_AUTH_FORM,
			payload: true
		})
	}
}

function * hideAthFormSaga () {
	while (true) {
		yield take(HIDE_SAGA_AUTH_FORM)
		yield put({
			type: HIDE_AUTH_FORM,
			payload: false
		})
	}
}

function * showRegister () {
	while (true) {
		yield take(SHOW_SAGA_REGISTER)
		yield put({
			type: SHOW_REGISTER,
			payload: true
		})
	}
}

function * showLogin () {
	while (true) {
		yield take(SHOW_SAGA_LOGIN)
		yield put({
			type: SHOW_LOGIN,
			payload: false
		})
	}
}

function * authFormSaga () {
	yield all([
		showAuthFormSaga(),
		hideAthFormSaga(),
		showRegister(),
		showLogin()
	])
}

// Reducer

const initialState = {
	open: false,
	needsRegistration: false

}

export function authFormReducer (state = initialState, action) {
	switch (action.type) {
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
}

export function * rootSaga () {
	yield all([authFormSaga(), postNewUserSaga()])
}