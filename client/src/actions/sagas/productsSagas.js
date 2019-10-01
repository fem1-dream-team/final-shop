import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCTS_CATEGORY_SAGA, SET_PRODUCTS_LIST, GET_PRODUCTS_SEARCH_SAGA } from '../types'
import { isLoading } from '../generalActions'
import { setProductsList } from '../productsActions'

export function * watchProductsSaga () {
	yield takeEvery(GET_PRODUCTS_CATEGORY_SAGA, getProdCategorySaga)
	yield takeEvery(GET_PRODUCTS_SEARCH_SAGA, getProdSearchSaga)
}

function * getProdCategorySaga (action) {
	// debugger
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
		// alert('4to-to He Poly4iloC')
	}
}

function * getProdSearchSaga (action) {
	debugger
	yield put(isLoading(true))

	try {
		const req = action.payload
		console.log(req)

		const response = yield call(() => axios.get(`http://localhost:3001/api${req}`))
		const data = response.data.data
		yield put({
			type: SET_PRODUCTS_LIST,
			payload: {
				productsList: data,
				// categoryName: categoryName
			}
		})
	} catch (err) {
		console.log(err)
		alert('4to-to He Poly4iloC')
	}
}
