import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from 'helpers/registerServiceWorker';

import install from 'modules';

const $ROOT = document.getElementById('root');

const render = ({ store, routes, history }) => {
	ReactDOM.render(<App routes={routes} history={history} store={store} />, $ROOT);
};

install().then(render);
registerServiceWorker();
