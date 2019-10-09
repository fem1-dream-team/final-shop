import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
	GET_PRODUCTS_CATEGORY_SAGA,
	SET_PRODUCTS_LIST,
	GET_PRODUCTS_SEARCH_SAGA,
	GO_FROM_MENU_SAGA,
	GET_DETAILED_PRODUCT_SAGA
} from '../types'
import { handleNavbar } from '../generalActions'
import { getProductCategories, setDetailedProduct } from '../productsActions'

export function * watchProductsSaga () {
	yield takeEvery(GET_PRODUCTS_CATEGORY_SAGA, getProdCategorySaga)
	yield takeEvery(GET_PRODUCTS_SEARCH_SAGA, getProdSearchSaga)
	yield takeEvery(GET_DETAILED_PRODUCT_SAGA, getDetailedProductSaga)
	yield takeEvery(GO_FROM_MENU_SAGA, goFromCollapseMenuSaga)
}

function * getProdCategorySaga (action) {
	try {
		const categoryName = action.payload
		const response = yield call(() => axios.get(`/api/getData/yummy/${categoryName}`))
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

function * getProdSearchSaga (action) {
	try {
		const response = yield call(() => axios.get(`/api${action.payload}`))
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
	try {
		const response = yield call(() => axios.get(`/api/getData/yummy/detailed/${action.payload}`))
		const data = response.data.data
		yield put(setDetailedProduct(data))
	} catch (err) {
		console.log('detaildproductERR: ' + err)
	}
}

function * goFromCollapseMenuSaga (action) {
	// console.log('im in goFromCollapseMenuSaga')
	yield put(handleNavbar(false))
	yield put(getProductCategories(action.payload))
}