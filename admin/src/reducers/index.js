import { combineReducers } from 'redux';
import {studentReducer} from './studentReducer.js';
import { studentCardReducer } from './studentCardReducer'
import { loginReducer } from './loginRucer'

const reducer = combineReducers({
    studentReducer,
    studentCardReducer,
    loginReducer,
})

export default reducer;



