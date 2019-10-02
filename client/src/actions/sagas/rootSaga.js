import {all} from 'redux-saga/effects'
import { watchNewUserSaga } from './authSagas'
import { watchAuthFormSaga } from './authFormSagas'
import { watchProductsSaga } from './productsSagas'

export default function * rootSaga () {
	yield all([watchAuthFormSaga(), watchNewUserSaga(), watchProductsSaga()])
}