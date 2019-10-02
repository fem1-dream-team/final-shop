import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
	GET_PRODUCTS_CATEGORY_SAGA,
	SET_PRODUCTS_LIST,
	GET_PRODUCTS_SEARCH_SAGA,
	GO_FROM_MENU_SAGA,
	GET_DETAILED_PRODUCT_SAGA
} from '../types'
import { handleNavbar, isLoading } from '../generalActions'
import { getProductCategories, setDetailedProduct } from '../productsActions'

export function * watchProductsSaga () {
	yield takeEvery(GET_PRODUCTS_CATEGORY_SAGA, getProdCategorySaga)
	yield takeEvery(GET_PRODUCTS_SEARCH_SAGA, getProdSearchSaga)
	yield takeEvery(GET_DETAILED_PRODUCT_SAGA, getDetailedProductSaga)
	yield takeEvery(GO_FROM_MENU_SAGA, goFromCollapseMenuSaga)
}

function * getProdCategorySaga (action) {
	console.log('ama in getProdCategorySaga')
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
			}
		})
	} catch (err) {
		console.log(err)
	}
}

// debugger
function * getProdSearchSaga (action) {
	console.log('ama in getProdSearchSaga')

	try {
		const response = yield call(() => axios.get(`http://localhost:3001/api${action.payload}`))
		const data = response.data.data
		yield put({
			type: SET_PRODUCTS_LIST,
			payload: {
				productsList: data,
				categoryName: action.payload
			}
		})
	} catch (err) {
		console.log(err)
	}
}

function * getDetailedProductSaga (action) {
	console.log('im in getDetailedProductSaga')
	try {
		const response = yield call(() => axios.get(`http://localhost:3001/api/getData/${action.payload}`))
		console.log(action.payload)

		const data = response.data.data
		console.log('response: ' + data)
		yield put(setDetailedProduct(data))
	} catch (err) {
		console.log('detaildproductERR: ' + err)
	}
}

function * goFromCollapseMenuSaga (action) {
	console.log('im in goFromCollapseMenuSaga')
	yield put(handleNavbar(false))
	yield put(getProductCategories(action.payload))
}