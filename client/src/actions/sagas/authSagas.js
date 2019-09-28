import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { call, put, takeEvery} from 'redux-saga/effects'

import { getErrors, isLoading } from '../errorActions'
import { showAuthForm, showRegister } from '../authFormActions'
import {POST_NEW_USER, LOGIN_USER} from '../types'
import { setCurrentUser } from '../authActions'

export function * watchNewUserSaga () {
	yield takeEvery(POST_NEW_USER, createNewUserWorker)
	yield takeEvery(LOGIN_USER, loginUserWorker)
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

function * loginUserWorker (action) {
//	TODO
	try {
		yield put(isLoading(true))
		const response = yield call(() => axios.post('http://localhost:3001/api/login', action.payload));
		yield localStorage.setItem('jwtToken', response.data.token)
		// yield localStorage.setItem('expirationDate', decoded.exp)
		// yield localStorage.setItem('userId', decoded.id)

		const decoded = jwt_decode(response.data.token)
		yield put(setCurrentUser(decoded))
		yield put(isLoading(false))
		yield put(showAuthForm(false))
		yield console.log('welcome, ' + decoded.first_name)
		// debugger
	} catch (err) {
		yield put(isLoading(false))
		console.log(err.response.data)
		yield put(getErrors(err.response.data))
	}
}
