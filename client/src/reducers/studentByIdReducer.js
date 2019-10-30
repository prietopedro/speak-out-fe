
import {
    FETCH_STUDENTBYID_START,
    FETCH_STUDENTBYID_SUCCESS,
    FETCH_STUDENTBYID_FAILURE
} from '../actions';

const initialState = {
    studentById: {},
    isLoading: false,
    fetching: false,
    error: null,
};

export const studentByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTBYID_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  FETCH_STUDENTBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetching: true,
                studentById: action.payload
            }
        case FETCH_STUDENTBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state
    }
}
