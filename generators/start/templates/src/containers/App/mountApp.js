import createStore from 'store';
import { getRoutes } from 'helpers/registers';
import { createBrowserHistory } from 'history';

const mountApp = () => {
	const history = createBrowserHistory({ basename: process.env.REACT_APP_BASENAME });
	const store = createStore({}, history);
	return { store, history, routes: getRoutes() };
};

export default mountApp;
