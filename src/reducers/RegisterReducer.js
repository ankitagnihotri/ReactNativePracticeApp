import { REGISTER_CLIENT } from '../constants/Types';

const initialState = {
  email: '',
  password: '',
  isRegistered: false,
};

const RegisterReducer = (state = initialState, action) => {
  console.log('ac', action);
  switch (action.type) {
    case REGISTER_CLIENT: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    default:
      return state;
  }
};
export default RegisterReducer;
