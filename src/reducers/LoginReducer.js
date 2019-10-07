import {
  VERIFY_CLIENT,
  VERIFY_CLIENT_ERROR,
  CLEAR_LOGIN_STATE,
  VERIFY_CLIENT_SESSION,
  DELETE_USER_SESSION,
} from '../constants/Types';

const initialState = {
  email: '',
  password: '',
  error: '',
  loggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
  console.log('reducer', action, state);
  switch (action.type) {
    case VERIFY_CLIENT: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case VERIFY_CLIENT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CLEAR_LOGIN_STATE: {
      return {
        ...state,
        error: false,
      };
    }
    case VERIFY_CLIENT_SESSION: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    case DELETE_USER_SESSION: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
export default LoginReducer;
