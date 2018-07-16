import { push } from 'react-router-redux';

import {
  AUTHENTIFICATION_LOGGED_START,
  AUTHENTIFICATION_LOGGED_SUCCESS,
  AUTHENTIFICATION_LOGGED_FAIL,
  AUTHENTIFICATION_LOGGED_OUT,
} from './constants';

import { SIGNIN, SIGNOUT } from './requests';

const redirectTag = '?redirect=';
const actions = {
  logged: {
    start: () => ({ type: AUTHENTIFICATION_LOGGED_START, payload: {} }),
    success: data => ({ type: AUTHENTIFICATION_LOGGED_SUCCESS, payload: data }),
    error: () => ({ type: AUTHENTIFICATION_LOGGED_FAIL, payload: {} }),
  },

  logout: {
    success: () => ({ type: AUTHENTIFICATION_LOGGED_OUT, payload: {} }),
  },
};

export const forceConnect = (token, user) => ({ type: AUTHENTIFICATION_LOGGED_SUCCESS, payload: { token, user } });

export const toLogged = ({ email, password }) => (dispatch, getState, Api) => {
  dispatch(actions.logged.start());

  Api.sendRequest(SIGNIN, {}, { email, password }).then(({ status, payload }) => {
    if (status === 'SUCCESS') {
      const { search } = getState().router.location;
      const redirect = ~search.indexOf(redirectTag) ? search.replace(redirectTag, '') : '/';
      dispatch(actions.logged.success(payload));
      dispatch(push(redirect));
    } else {
      dispatch(actions.logged.error());
    }
  });
};

export const logout = () => (dispatch, getState, Api) => {
  dispatch(actions.logout.success());
  Api.sendRequest(SIGNOUT).then(() => {
    dispatch(actions.logged.error());
    dispatch(push('/login'));
  });
};
