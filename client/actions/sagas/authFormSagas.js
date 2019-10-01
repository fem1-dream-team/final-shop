import { put, takeEvery } from 'redux-saga/effects'

import { clearErrors, isLoading } from '../generalActions'
import {
	SHOW_AUTH_FORM, SHOW_AUTH_FORM_SAGA,
	SHOW_REGISTER, SHOW_REGISTER_SAGA
} from '../types'

export function * watchAuthFormSaga () {
	yield takeEvery(SHOW_AUTH_FORM_SAGA, showAuthFormSaga)
	yield takeEvery(SHOW_REGISTER_SAGA, showRegisterSaga)
}

function * showAuthFormSaga (action) {
	yield put(isLoading(false))
	yield put(clearErrors())
	yield put({
		type: SHOW_AUTH_FORM,
		payload: action.payload
	})
}

function * showRegisterSaga (action) {
	yield put(isLoading(false))
	yield put(clearErrors())
	yield put({
		type: SHOW_REGISTER,
		payload: action.payload
	})
}