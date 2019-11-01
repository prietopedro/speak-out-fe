import {
    FETCH_PLACEMENTTEST_START,
    FETCH_PLACEMENTTEST_SUCCESS,
    FETCH_PLACEMENTTEST_FAILURE,
} from '../actions'

const initialState = {
    isLoading: false,
    error: null,
    placementTest: []
}

export const placementTestReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_PLACEMENTTEST_START:
        return {
            ...state,
            isLoading: true,
            error: null,
        }
    case FETCH_PLACEMENTTEST_SUCCESS:
        return {
            ...state,
            isLoading: false,
            placementTest: action.payload
        }
    case FETCH_PLACEMENTTEST_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        }
    default: return state;
    }
}