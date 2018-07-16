import { registerReducer, registerRequests } from 'helpers/registers';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Api from 'helpers/registers/requests';

const middleware = [ thunk.withExtraArgument(Api) ];

if (typeof Promise === 'undefined') {
	// Rejection tracking prevents a common issue where React gets into an
	// inconsistent state due to an error, but it gets swallowed by a Promise,
	// and the user has no idea what causes React's erratic future behavior.
	require('promise/lib/rejection-tracking').enable();
	window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');
if (process.env.NODE_ENV == 'test') {
	/*	global.fetch = require('jest-fetch-mock');
	global.mockStore = configureStore(middleware);
	global.installToTest = (requests, reducer) => {
		registerRequests(requests);
		registerReducer('##', reducer);
	};*/
}

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
	require('raf').polyfill(global);
}
