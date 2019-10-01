import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCTS_CATEGORY_SAGA, SET_PRODUCTS_LIST, GET_PRODUCTS_SEARCH_SAGA } from '../types'
import { isLoading } from '../generalActions'

export function * watchProductsSaga () {
	yield takeEvery(GET_PRODUCTS_CATEGORY_SAGA, getProdCategorySaga)
	yield takeEvery(GET_PRODUCTS_SEARCH_SAGA, getProdSearchSaga)
}

function * getProdCategorySaga (action) {
	yield put(isLoading(true))

	try {
		const categoryName = action.payload
		console.log(categoryName)

		const response = yield call(() => axios.get(`http://localhost:3001/api/getData/category${categoryName}`))
		const data = response.data.data
		yield put({
			type: SET_PRODUCTS_LIST,
			payload: {
				productsList: data,
				categoryName: categoryName
			}
		})
	} catch (err) {
		console.log(err)
	}
}

function * getProdSearchSaga (action) {
	yield put(isLoading(true))
	try {
		const response = yield call(() => axios.get(`http://localhost:3001/api${action.payload}`))
		const data = response.data.data
		yield put({
			type: SET_PRODUCTS_LIST,
			payload: {
				productsList: data,
			}
		})
	} catch (err) {
		console.log(err)
	}
}