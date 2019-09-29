import { CLEAR_ERRORS, GET_ERRORS, IS_LOADING } from './types'

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