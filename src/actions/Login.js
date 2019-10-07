import { Actions } from 'react-native-router-flux';
import {
  VERIFY_CLIENT,
  VERIFY_CLIENT_ERROR,
  CLEAR_LOGIN_STATE,
  VERIFY_CLIENT_SESSION,
  DELETE_USER_SESSION,
} from '../constants/Types';
import {
  createUserSession,
  getUserSession,
  deleteUserSessions,
  getStorage,
} from './../utils';

// const users = {
//   email: 'ankit',
//   password: '123',
// };

export const verifyClient = newLoginState => {
  return async dispatch => {
    let value = await getStorage('users');
    value = JSON.parse(value);

    if (value) {
      if (Object.keys(value).indexOf(newLoginState.email) >= 0) {
        if (value[newLoginState.email] === newLoginState.password) {
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: 'Login Successfull',
          });
          createUserSession(newLoginState.email);
          dispatch({
            type: VERIFY_CLIENT,
            payload: newLoginState,
          });
          Actions.home();
        } else {
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: 'Incorrect password',
          });
        }
      } else {
        dispatch({
          type: VERIFY_CLIENT_ERROR,
          payload: 'Incorrect Email',
        });
      }
    }
  };
};

// export const verifyClient = newLoginState => {
//   console.log(newLoginState, 'action');
//   return async dispatch => {
//     const value = await users;
//     if (value) {
//       if (
//         value.email === newLoginState.email &&
//         value.password === newLoginState.password
//       ) {
//         dispatch({
//           type: VERIFY_CLIENT_ERROR,
//           payload: 'Login Successful',
//         });
//         createUserSession(newLoginState.email);
//         dispatch({
//           type: VERIFY_CLIENT,
//           payload: newLoginState,
//         });
//         Actions.home();
//       } else {
//         dispatch({
//           type: VERIFY_CLIENT_ERROR,
//           payload: 'Incorrect Email or Password',
//         });
//       }
//     }
//   };
// };

export const verifyClientError = txtMsg => {
  return dispatch => {
    dispatch({
      type: VERIFY_CLIENT_ERROR,
      payload: txtMsg,
    });
  };
};

export const clearLoginState = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_LOGIN_STATE,
      payload: false,
    });
  };
};

export const openRegisterScreen = () => {
  return dispatch => {
    Actions.register();
  };
};

export const verifyClientSession = () => {
  return async dispatch => {
    const state = await getUserSession();
    dispatch({
      type: VERIFY_CLIENT_SESSION,
      payload: state,
    });
  };
};

export const deleteUserSession = key => {
  return async dispatch => {
    const state = await deleteUserSessions(key);
    if (state === true) {
      dispatch({
        type: DELETE_USER_SESSION,
        payload: false,
      });
      Actions.login();
    }
  };
};
