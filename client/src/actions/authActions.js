import axios from 'axios'
import { take, call, put, takeEvery} from 'redux-saga/effects'
import { GET_ERRORS, SHOW_SAGA_LOGIN, POST_NEW_USER } from './types'
import { showSagaLogin } from './sagaAuthForm'

export const registerUser = (userData) => {
	debugger
	return {
		type: POST_NEW_USER,
		payload: userData
	}
}

const registerFailed = (err) => {
	return {
		type: GET_ERRORS,
		payload: err
	}
}

function * createNewUser (action) {
	try {
		const response = yield call(() => axios.post('/api/register', action.payload));
		yield put(showSagaLogin())
	} catch (err) {
		console.log(yield err)
		yield put(registerFailed(err))
	}
}

export function * postNewUserSaga () {
	yield takeEvery(POST_NEW_USER, createNewUser)
}
