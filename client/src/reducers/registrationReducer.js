import {
  RLOGGEDIN_START,
  RLOGGEDIN_SUCCESS,
  RLOGGEDIN_FAILURE,
  RLOGIN_START,
  RLOGIN_SUCCESS,
  RLOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FAMILY_START,
  FAMILY_SUCCESS,
  FAMILY_FAILURE
} from '../actions';

const initialState = {
  user: {
    authenticated: false,
    username: null
  },
  loggedIn: {
    isLoading: false,
    error: null
  },
  logIn: {
    isLoading: false,
    error: null
  },
  register: {
    isLoading: false,
    error: null
  },
  family: {
    isLoading: false,
    error: null
  }
};


export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RLOGIN_START:
      return {
        ...state,
        logIn: {
          isLoading: true,
          error: null
        }
      };
    case RLOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          error: null
        },
        user: {
          authenticated: true,
          username: action.payload.username, //update the be login endpoint to return username
        }
      }
    case RLOGIN_FAILURE:
      return {
        ...state,
        logIn: {
          isLoading: false,
          error: action.payload //update the be endpoint to return an error
        }
      };
      case REGISTER_START:
        return {
          ...state,
          register: {
            isLoading: true,
            error: null
          }
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          register: {
            isLoading: false,
            error: null
          },
          user: {
            authenticated: false,
            username: null,
          }
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          register: {
            isLoading: false,
            error: 'Error' //display proper error
          }
        };
        case FAMILY_START:
            return {
              ...state,
              family: {
                isLoading: true,
                error: null
              }
            };
          case FAMILY_SUCCESS:
            return {
              ...state,
              family: {
                isLoading: false,
                error: null
              },
              user: {
                authenticated: false,
                username: null,
              }
            };
          case FAMILY_FAILURE:
            return {
              ...state,
              family: {
                isLoading: false,
                error: 'Error' //display proper error
              }
            };
            case RLOGGEDIN_START:
      return {
        ...state,
        loggedIn: {
          isLoading: true,
          error: null
        }
      };
    case RLOGGEDIN_SUCCESS:
      return {
        ...state,
        loggedIn: {
          isLoading: false,
          error: null
        },
        user: {
          authenticated: action.payload.authenticated,
          username: action.payload.username || 'undefined'
        }
      };
    case RLOGGEDIN_FAILURE:
      return {
        ...state,
        loggedIn: {
          isLoading: false,
          error: 'Error' //display proper error
        }
      }
    default:
      return state;
  }
};