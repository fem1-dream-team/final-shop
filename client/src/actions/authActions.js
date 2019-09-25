import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
// import jwtDecode from 'jwt-decode';
import {GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from './types';

export const registerUser = (userData, history) => (dispatch) => {
	axios.post('http://localhost:3001/api/register', userData)
		.then(res => history.push('/login'))
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}))
};