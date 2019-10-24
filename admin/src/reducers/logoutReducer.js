import {
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    isLoggedOut: false,
    error: null,
};

export const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedOut: true,
                
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state
    }
}