import { SHOW_AUTH_FORM_SAGA, SHOW_REGISTER_SAGA} from './types'

export const showAuthForm = (answer) => {
	return {
		type: SHOW_AUTH_FORM_SAGA,
		payload: answer
	}
}

export const showRegister = (answer) => {
	return {
		type: SHOW_REGISTER_SAGA,
		payload: answer
	}
}