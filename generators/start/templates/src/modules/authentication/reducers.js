import {
  AUTHENTIFICATION_LOGGED_START,
  AUTHENTIFICATION_LOGGED_SUCCESS,
  AUTHENTIFICATION_LOGGED_FAIL,
  AUTHENTIFICATION_LOGGED_OUT,
} from './constants';

import { setToken } from 'helpers/apiClient';

export default (state = { logged: false, current: {} }, action) => {
  switch (action.type) {
    case AUTHENTIFICATION_LOGGED_START:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { ...state, logged: false, current: {} };

    case AUTHENTIFICATION_LOGGED_SUCCESS:
      setToken('manager', action.payload.token);
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        logged: true,
        current: action.payload.user,
      };

    case AUTHENTIFICATION_LOGGED_OUT:
    case AUTHENTIFICATION_LOGGED_FAIL:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { ...state, logged: false, current: {} };

    default:
      return state;
  }
};
