import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { logoutReducer } from './logoutReducer';
import { userReducer } from './userReducer';

const reducer = combineReducers({
    loginReducer,
    logoutReducer,
    userReducer
})

export default reducer;



