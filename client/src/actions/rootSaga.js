import {all} from 'redux-saga/effects'
import { watchNewUserSaga } from './authActions'
import { authFormSaga } from './sagaAuthForm'

export default function * rootSaga () {
	yield all([authFormSaga(), watchNewUserSaga()])
}