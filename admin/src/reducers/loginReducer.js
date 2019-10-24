import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    error: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state
    }
}