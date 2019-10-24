import {
    FETCH_API_DATA,
    FETCH_API_SUCCESS,
    FETCH_API_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    isFetchingData: false,
    error: null,
};

export const APIReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_API_DATA:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  FETCH_API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFetchingData: true
                
            }
        case FETCH_API_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state
    }
}