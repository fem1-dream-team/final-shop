import { CLEAR_ERRORS, GET_ERRORS, GO_FROM_MENU_SAGA, IS_LOADING, SHOW_NAVBAR } from './types'

export const getErrors = (err) => {
	return {
		type: GET_ERRORS,
		payload: err
	}
}

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
		payload: {}
	}
}

export const isLoading = (value) => {
	return {
		type: IS_LOADING,
		payload: value
	}
}

export const handleNavbar = (status) => {
	return {
		type: SHOW_NAVBAR,
		payload: status,
	}
}

export const goFromCollapseMenu = (where) => {
	return {
		type: GO_FROM_MENU_SAGA,
		payload: where,
	}
}