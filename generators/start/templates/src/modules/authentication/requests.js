import { buildCaller } from 'helpers/apiClient';

const authCaller = buildCaller(process.env.REACT_APP_API_URL, 'manager');
const apiAuth = authCaller('auth');

export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const FORGOTPASSWORD = 'FORGOTPASSWORD';

export default {
  [`${SIGNIN}`]: apiAuth.put({ opt: 'signin' }),
  [`${SIGNOUT}`]: apiAuth.delete({ opt: 'signout' }),
  [`${FORGOTPASSWORD}`]: apiAuth.put({ opt: 'forgot-password' }),
};
