import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { call, put, takeEvery} from 'redux-saga/effects'

import { getErrors, isLoading } from '../errorActions'
import { showAuthForm, showRegister } from '../authFormActions'
import { POST_NEW_USER, LOGIN_USER, CHECK_LOGIN_SAGA, LOGOUT_CURRENT_USER_SAGA } from '../types'
import { checkIfIsLoggedIn, logoutCurrentUser, setCurrentUser } from '../authActions'
import setAuthToken from '../../utils/setAuthToken'

export function * watchNewUserSaga () {
	yield takeEvery(POST_NEW_USER, createNewUserWorker)
	yield takeEvery(LOGIN_USER, loginUserWorker)
	debugger
	yield takeEvery(CHECK_LOGIN_SAGA, checkLoginWorker)
	yield takeEvery(LOGOUT_CURRENT_USER_SAGA, logoutUserWorker)
}

function * createNewUserWorker (action) {
	try {
		yield put(isLoading(true))
		yield call(() => axios.post('http://localhost:3001/api/register', action.payload));
		yield put(showRegister(false))
		yield put(isLoading(false))
	} catch (err) {
		yield put(isLoading(false))
		yield put(getErrors(err.response.data))
	}
}

function * checkLoginWorker (action) {
	debugger
	const {payload} = action
	if (payload) {
		yield setAuthToken(payload)
		const decoded = jwt_decode(payload)
		const currentTime = (Date.now() / 1000)
		yield (decoded.exp > currentTime) ? put(setCurrentUser(decoded)) : put(logoutCurrentUser())
	}
}

function * loginUserWorker (action) {
//	TODO

	try {
		debugger
		yield put(isLoading(true))
		const response = yield call(() => axios.post('http://localhost:3001/api/login', action.payload));
		yield localStorage.setItem('jwtToken', response.data.token)
		yield put(checkIfIsLoggedIn())
		yield put(isLoading(false))
		yield put(showAuthForm(false))
	} catch (err) {
		yield put(isLoading(false))
		console.log(err.response.data)
		yield put(getErrors(err.response.data))
	}
}

function * logoutUserWorker(action) {
	debugger
	yield localStorage.removeItem('jwtToken')
	setAuthToken(false)
	yield put(setCurrentUser({}))
}