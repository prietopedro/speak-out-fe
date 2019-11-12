import { combineReducers } from 'redux';
import { registrationReducer } from './registrationReducer';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './adminDashboardReducers/studentTableReducer';
import { studentByIdReducer } from './adminDashboardReducers/studentByIdReducer';
import { parentReducer } from './adminDashboardReducers/parentReducer';
import { staffTableReducer } from './adminDashboardReducers/staffTableReducer';
import { staffByIdReducer } from './adminDashboardReducers/staffByIdReducer';


export const reducer = combineReducers({
  registrationReducer,
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
  parentReducer,
  staffTableReducer,
  staffByIdReducer,
});

