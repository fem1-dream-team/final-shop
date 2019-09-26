import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
// import jwtDecode from 'jwt-decode';
import {GET_ERRORS} from './types';

export const registerUser = (userData, history) => (dispatch) => {
	axios.post('/api/register', userData)
		.then(res => history.push('/login'))
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}))
};