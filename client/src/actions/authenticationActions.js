import axios from 'axios';
import API_URL from '../config/apiUrl';

axios.defaults.withCredentials = true;

export const LOGGEDIN_START = 'LOGGEDIN_START';
export const LOGGEDIN_SUCCESS = 'LOGGEDIN_SUCCESS';
export const LOGGEDIN_FAILURE = 'LOGGEDIN_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loggedIn = (history, location) => {
	return dispatch => {
		dispatch({ type: LOGGEDIN_START });

		axios
			.get(`${API_URL}/user`)
			.then(res => {
				dispatch({ type: LOGGEDIN_SUCCESS, payload: res.data });
				if (!res.data.authenticated && location.pathname === '/dashboard') {
					history.push('/login');
				} else if (res.data.authenticated) {
					history.push('/dashboard');
				}
			})
			.catch(err => {
				let wrongCredentials = true;
				dispatch({ type: LOGGEDIN_FAILURE, payload: wrongCredentials });
			});
	};
};

export const logIn = (user, history) => {
	return dispatch => {
		dispatch({ type: LOGIN_START });

		// axios
		// 	.post(`${API_URL}/login`, user)
		// 	.then(res => {
		// 		// SETTING THE USER TYPE TO LOCAL STORAGE SO THAT IT DOES NOT GET LOST IF USER RELOADS THE PAGE
		// 		localStorage.setItem('userType', res.data.user_type);
		// 		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		// 		history.push('/dashboard');
		// 	})
		// 	.catch(err => {
		// 		dispatch({ type: LOGIN_FAILURE, payload: 'Error' });
		// 	});
		return fetch(`${API_URL}/login`, {
			method: 'POST',
			mode: 'same-origin',
			redirect: 'follow',
			credentials: 'include', // Don't forget to specify this if you need cookies
			// headers: headers,
			body: JSON.stringify(user)
		})
	};
};

export const logOut = history => {
	return dispatch => {
		dispatch({ type: LOGOUT_START });

		axios
			.get(`${API_URL}/logout`)
			.then(res => {
				dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
				localStorage.removeItem('userType');
				history.push('/');
			})
			.catch(err => {
				dispatch({ type: LOGOUT_FAILURE, payload: 'Error' });
			});
	};
};
