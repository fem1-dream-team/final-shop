import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { call, put, takeEvery} from 'redux-saga/effects'
import { GET_ERRORS, LOGIN_USER, POST_NEW_USER } from './types'
import { showSagaLogin } from './sagaAuthForm'

export const registerUser = (userData) => {
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

const authFailed = (err) => {
	return {
		type: GET_ERRORS,
		payload: err
	}
}

function * createNewUserWorker (action) {
	try {
		yield call(() => axios.post('http://localhost:3001/api/register', action.payload));
		yield put(showSagaLogin())
	} catch (err) {
		console.error(err.response.data)
		yield put(authFailed(err.response.data))
	}
}

function * loginUserWorker (action) {
//	TODO
	try {
		const response = yield call(() => axios.post('http://localhost:3001/api/login', action.payload));
		const decoded = jwt_decode(response.data.token)
		yield localStorage.setItem('jwtToken', response.data.token)
		// yield localStorage.setItem('expirationDate', decoded.exp)
		// yield localStorage.setItem('userId', decoded.id)
		yield console.log('welcome, ' + decoded.first_name)
		// debugger
	} catch (err) {
		console.log(err.response.data)
		yield put(authFailed(err.response.data))
	}
}

export function * watchNewUserSaga () {
	yield takeEvery(POST_NEW_USER, createNewUserWorker)
	yield takeEvery(LOGIN_USER, loginUserWorker)
}
