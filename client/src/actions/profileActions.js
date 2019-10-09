import {RUN_SAGA_EDIT} from './types';

export const saveEditedUser = (user) => {
	return {
		type: RUN_SAGA_EDIT,
		payload: user
	};
}