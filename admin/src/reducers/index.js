import { combineReducers } from 'redux';
import {studentReducer} from './studentReducer.js';
import { studentCardReducer } from './studentCardReducer'


const reducer = combineReducers({
    studentReducer,
    studentCardReducer,
})

export default reducer;



