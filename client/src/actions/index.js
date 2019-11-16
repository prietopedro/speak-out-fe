import { from } from 'rxjs';

export {
  logIn,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  logOut,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  loggedIn,
  LOGGEDIN_START,
  LOGGEDIN_SUCCESS,
  LOGGEDIN_FAILURE

} from './authenticationActions.js';

export {
  getStudentTable,
  filterStudentTable,
  SET_FILTER_STUDENT,

  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,  
  

  createNewStudent,
  CREATE_NEW_STUDENT_START,
  CREATE_NEW_STUDENT_SUCCESS,
  CREATE_NEW_STUDENT_FAILURE,

  getDropDown,
  FETCH_DROPDOWN_START,
  FETCH_DROPDOWN_SUCCESSTABLE1,
  FETCH_DROPDOWN_SUCCESSTABLE2,
  FETCH_DROPDOWN_SUCCESSTABLE3,
  FETCH_DROPDOWN_SUCCESSTABLE4,
  FETCH_DROPDOWN_FAILURE,
  resetForm,
} from './adminDashboardActions/studentTableActions.js';

  export {
  toggleEditComponent,
  getStudentById,
  FETCH_STUDENTBYID_START,
  FETCH_STUDENTBYID_SUCCESS,
  FETCH_STUDENTBYID_FAILURE,

  editStudentById,
  EDIT_STUDENTBYID_START,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_CANCELLED,
  EDIT_STUDENTBYID_FAILURE,
  
  deleteStudentById,
  DELETE_STUDENTBYID_START,
  DELETE_STUDENTBYID_SUCCESS,
  DELETE_STUDENTBYID_FAILURE,
} from './adminDashboardActions/studentByIdAction.js'

export {
  getParentTable,
  FETCH_PARENTS_START,
  FETCH_PARENTS_SUCCESS,
  FETCH_PARENTS_FAILURE,

  getParentById,
  FETCH_PARENTBYID_START,
  FETCH_PARENTBYID_SUCCESS,
  FETCH_PARENTBYID_FAILURE,

  toggleEditParent,
  editParentById,
  EDIT_PARENTBYID_START,
  EDIT_PARENTBYID_SUCCESS,
  EDIT_PARENTBYID_FAILURE,

  getStudentByFamilyId,
  FETCH_STUDENTBYFAMILYID_START,
  FETCH_STUDENTBYFAMILYID_SUCCESS,
  FETCH_STUDENTBYFAMILYID_FAILURE,

  toggleAddParentComponent,
  addParent,
  ADD_PARENT_START,
  ADD_PARENT_SUCCESS,
  ADD_PARENT_FAILURE,
  filterParentTable,
  SET_FILTER_PARENT,
} from './adminDashboardActions/parentAction.js'

export {
  getStaffTable,
  FETCH_STAFF_START,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,

  getStaffById,
  FETCH_STAFFBYID_START,
  FETCH_STAFFBYID_SUCCESS,
  FETCH_STAFFBYID_FAILURE,
  
  editStaffById,
  toggleStaffEditComponent,
  EDIT_STAFFBYID_START,
  EDIT_STAFFBYID_SUCCESS,
  EDIT_STAFFBYID_FAILURE,

  addStaff,
  toggleAddStaffComponent,
  ADD_STAFF_START,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE,

  filterStaffTable,
  SET_FILTER_STAFF,
} from './adminDashboardActions/staffActions.js';


export {
  getStudentProgress,
  FETCH_STUDENTPROGESS_START,
  FETCH_STUDENTPROGESS_SUCCESS,
  FETCH_STUDENTPROGESS_FAILURE,

  postStudentProgress,
  togglePostComponent,
  CREATE_STUDENTPROGRESS_START,
  CREATE_STUDENTPROGRESS_SUCCESS,
  CREATE_STUDENTPROGRESS_FAILURE,

  editStudentProgress,
  toggleEditProgressComponent,
  EDIT_STUDENTPROGRESS_START,
  EDIT_STUDENTPROGRESS_SUCCESS,
  EDIT_STUDENTPROGRESS_FAILURE,
} from './adminDashboardActions/studentProgressActions.js'

export {
  getStudentCourses,
  FETCH_STUDENTCOURSES_START,
  FETCH_STUDENTCOURSES_SUCCESS,
  FETCH_STUDENTCOURSES_FAILURE
} from './adminDashboardActions/studentCourseActions.js';

export {
  getCourseTable,
  FETCH_COURSES_START,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,

  getCourseById,
  FETCH_COURSEBYID_START,
  FETCH_COURSEBYID_SUCCESS,
  FETCH_COURSEBYID_FAILURE,

  toggleEditCourse,
  editCouseById,
  EDIT_COURSEBYID_START,
  EDIT_COURSEBYID_SUCCESS,
  EDIT_COURSEBYID_FAILURE,

  getStudentTableByCourseID,
  DISPLAY_STUDENTSBYCOURSEID_START,
  DISPLAY_STUDENTSBYCOURSEID_SUCCESS,
  DISPLAY_STUDENTSBYCOURSEID_FAILURE,

  toggleAddCourseComponent,
  addCourse,
  ADD_COURSE_START,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  filterCourseTable,
  SET_FILTER_COURSES,
} from './adminDashboardActions/courseAction';

export {
  getPlacementTests,
  getPlacementTestById,
  toggleEditPlacement,
  editPlacementTestById,
  FETCH_PLACEMENTTESTS_START,
  FETCH_PLACEMENTTESTS_SUCCESS,
  FETCH_PLACEMENTTESTS_FAILURE,
  FETCH_PLACEMENTTESTTBYID_START,
  FETCH_PLACEMENTTESTTBYID_SUCCESS,
  FETCH_PLACEMENTTESTTBYID_FAILURE,
  EDIT_PLACEMENTTESTTBYID_START,
  EDIT_PLACEMENTTESTTBYID_SUCCESS,
  EDIT_PLACEMENTTESTTBYID_FAILURE,
} from './adminDashboardActions/placementTestAction'


export {
  getStaffCourses,
  FETCH_STAFFCOURSES_START,
  FETCH_STAFFCOURSES_SUCCESS,
  FETCH_STAFFCOURSES_FAILURE,

  getStudentsByCourseID,
  FETCH_STUDENTSBYCOURSEID_START,
  FETCH_STUDENTSBYCOURSEID_SUCCESS,
  FETCH_STUDENTSBYCOURSEID_FAILURE
} from './adminDashboardActions/staffCourseActions.js';


export {  
  postStudentAttendance,
  CREATE_ATTENDANCE_START,
  CREATE_ATTENDANCE_SUCCESS,
  CREATE_ATTENDANCE_FAILURE,
} from './adminDashboardActions/attendanceActions.js'

export {
  FAMILY_REGISTER_START,
  FAMILY_REGISTER_SUCCESS,
  FAMILY_REGISTER_FAILURE
} from './registrationActions'