import { registerReducer, registerRoute, registerRequests } from 'helpers/registers';
import reducers from './reducers';
import routes from './routes';
import requests from './requests';

export default {
  install: () => {
    registerRequests(requests);
    registerRoute(routes);
    registerReducer('authentication', reducers);
  },
};
