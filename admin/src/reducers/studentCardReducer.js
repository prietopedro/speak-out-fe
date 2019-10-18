import {
    FETCH_STUDENTBYID_DATA_START,
    FETCH_STUDENTBYID_DATA_SUCCESS,
    FETCH_STUDENTBYID_DATA_FAILURE
} from '../actions';

const initialState = {
    studentById: {},
    isLoading: false,
    fetching: false,
    error: null,
};

export const studentCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTBYID_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  FETCH_STUDENTBYID_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetching: true,
                studentById: action.payload
            }
        case FETCH_STUDENTBYID_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state
    }
}