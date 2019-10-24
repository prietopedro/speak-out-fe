import {
    FETCH_USER_DATA,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    isFetchingData: false,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DATA:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFetchingData: true
                
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state
    }
}