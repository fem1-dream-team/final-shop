import {all} from 'redux-saga/effects'
import { watchUserSaga } from './authSagas'
import { watchAuthFormSaga } from './authFormSagas'
import { watchProductsSaga } from './productsSagas'

export default function * rootSaga () {
	yield all([watchAuthFormSaga(), watchUserSaga(), watchProductsSaga()])
}