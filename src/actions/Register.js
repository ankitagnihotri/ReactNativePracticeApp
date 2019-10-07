import { Actions } from 'react-native-router-flux';
import { REGISTER_CLIENT } from '../constants/Types';
import { setStorage, getStorage } from './../utils';

export const registerClient = newRegisterState => {
  return async dispatch => {
    const data = {};
    const email = newRegisterState.email;
    data[email] = newRegisterState.password;
    let value = await getStorage('users');
    if (value === null) {
      setStorage('users', JSON.stringify(data));
    } else {
      value = JSON.parse(value);
      const newData = { ...value, ...data };
      setStorage('users', JSON.stringify(newData));
    }
    Actions.login();
    dispatch({
      type: REGISTER_CLIENT,
      payload: newRegisterState,
    });
  };
};

export const openLoginScreen = () => {
  return dispatch => {
    Actions.login();
  };
};
