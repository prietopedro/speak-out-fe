import {
    FETCH_STUDENT_DATA_START,
    FETCH_STUDENT_DATA_SUCCESS,
    FETCH_STUDENT_DATA_FAILURE
} from '../actions';

const initialState = {
    student: [],
    isLoading: false,
    fetching: false,
    error: null,
};

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  FETCH_STUDENT_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetching: true,
                student: action.payload
            }
        case FETCH_STUDENT_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}