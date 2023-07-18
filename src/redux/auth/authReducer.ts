import { LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';

const initialState = {
  token: '',
  error: '',
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;