import {put, takeEvery} from 'redux-saga/effects'
import { BUY_BTN_HANDLER, BUY_BTN_HANDLER_SAGA } from '../types'

export function * watchBasketSagas () {
	yield takeEvery(BUY_BTN_HANDLER_SAGA, buyBtnHandlerSaga)
}

function * buyBtnHandlerSaga (action) {
	yield put({
		type: BUY_BTN_HANDLER,
		payload: {
			id: action.payload.productId,
			price: action.payload.price,
			image: action.payload.image,
			name: action.payload.name,
			// totalPrice: action.payload.totalPrice,
			// totalAmount: action.payload.totalAmount
		}
	})
}

// export function * watchCartSagas () {
// 	yield takeEvery(BTN_HANDLER_BASKET_SAGA, btnCartHandlerSaga)
// }
//
// function * btnCartHandlerSaga (action) {
// 	yield put({
// 		type: BTN_HANDLER_BASKET,
// 		payload: {
// 			id: action.payload.productId,
// 			price: action.payload.price,
// 		}
// 	})
// }