import {
  GET_FAMILY_ID_START,
  GET_FAMILY_ID_SUCCESS,
  GET_FAMILY_ID_FAILURE,
  GET_CHILDREN_START,
  GET_CHILDREN_SUCCESS,
  GET_CHILDREN_FAILURE,
  GET_PLACEMENT_INFO_START,
  GET_PLACEMENT_INFO_SUCCESS,
  GET_PLACEMENT_INFO_FAILURE,
  GET_COURSES_START,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_NEW_STUDENT_START,
  ADD_NEW_STUDENT_SUCCESS,
  ADD_NEW_STUDENT_FAILURE
} from "../../../actions";

const initialState = {
  family_id: null,
  block_code: null,
  building: null,
  road: null,
  flat: null,
  father_name: null,
  mother_name: null,
  primary_telephone: null,
  secondary_telephone: null,
  children: [], //adds placement_test and courses keys to each object on GET_CHILDREN_SUCCESS
  isLoading: null,
  error: null,
  getCourseInfoIsLoading: false,
  addNewStudentIsLoading: false
};


export const parentDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAMILY_ID_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_FAMILY_ID_SUCCESS:
      return {
        ...state,
        // isLoading: false,
        family_id: action.payload.id,
        block_code: action.payload.block_code,
        building: action.payload.building,
        road: action.payload.road,
        flat: action.payload.flat,
        father_name: action.payload.father_name,
        mother_name: action.payload.mother_name,
        primary_telephone: action.payload.primary_telephone,
        secondary_telephone: action.payload.secondary_telephone,
      }
    case GET_FAMILY_ID_FAILURE:
      return {
        ...state,
        error: 'Something went wrong'
      };
    case GET_CHILDREN_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_CHILDREN_SUCCESS:
      let childrenArr = [];
      for (let i = 0; i < action.payload.length; i++) {
        let student = action.payload[i];
        student['placement_test'] = [];
        student['courses'] = [];
        childrenArr.push(student);
      }
      return {
        ...state,
        isLoading: false,
        children: childrenArr
      }
    case GET_CHILDREN_FAILURE:
      return {
        ...state,
        error: 'Something went wrong'
      };
    case GET_PLACEMENT_INFO_START:
      return {
        ...state,
        getCourseInfoIsLoading: true
      };
    case GET_PLACEMENT_INFO_SUCCESS:
      let newStudentArr = [];
      if (action.payload.length !== 0) {
        for (let i = 0; i < state.children.length; i++) {
          if (state.children[i].id = action.payload[0].student_id) {
            state.children[i].placement_test = action.payload;
            newStudentArr.push(state.children[i]);
          } else {
            newStudentArr.push(state.children[i]);
          }
        }
      }
      return {
        ...state,
        children: newStudentArr.length !== 0 ? newStudentArr : state.children
      };
    case GET_PLACEMENT_INFO_FAILURE:
      return {
        ...state,
        
      };
    case GET_COURSES_START:
      return {
        ...state,
        
      };
    case GET_COURSES_SUCCESS:
      let newArr = [];
      if (action.payload.length !== 0) {
        for (let i = 0; i < state.children.length; i++) {
          if (state.children[i].id = action.payload[0].student_id) {
            state.children[i].courses = action.payload;
            newArr.push(state.children[i]);
          } else {
            newArr.push(state.children[i]);
          }
        }
      }
      return {
        ...state,
        getCourseInfoIsLoading: false,
        children: newArr.length !== 0 ? newArr : state.children
      };
    case GET_COURSES_FAILURE:
      return {
        ...state,
        
      };
    case ADD_NEW_STUDENT_START:
      return {
        ...state,
        addNewStudentIsLoading: true
      };
    case ADD_NEW_STUDENT_SUCCESS:
      return {
        ...state,
        addNewStudentIsLoading: false,
      };
    case ADD_NEW_STUDENT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};