import { registerReducer } from 'helpers/registers';
import reducer from './reducers';
import { routerReducer } from 'react-router-redux';

import { LayoutComponent, LayoutConnect } from './LayoutComponent';
import { showDanger, showSuccess, showInfo, showWarning, hideAlert } from './actions';

import Layout from './containers/Layout';

export { Layout, LayoutComponent, LayoutConnect, showDanger, showSuccess, showInfo, showWarning, hideAlert };
export default {
	install: () => {
		registerReducer('router', routerReducer);
		registerReducer('layout', reducer);
	}
};
