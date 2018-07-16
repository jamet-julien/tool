import { registerReducer, registerRoute } from 'helpers/registers';
import reducers from './reducers';
import routes from './routes';
export default {
  install: () => {
    registerRoute(routes);
    registerReducer('home', reducers);
  },
};
