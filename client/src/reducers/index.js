import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './studentTableReducer';
import { studentByIdReducer } from './studentByIdReducer';
import { placementTestReducer } from './placementTestReducer'


export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
  placementTestReducer,
});

