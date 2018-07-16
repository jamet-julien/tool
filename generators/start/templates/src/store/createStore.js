import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { getReducers } from 'helpers/registers';
import thunk from 'redux-thunk';

import Api from 'helpers/registers/requests';

const enhancers = [];

export default (initialState = {}, history) => {
	const middleware = [ thunk.withExtraArgument(Api), routerMiddleware(history) ];

	return createStore(
		combineReducers(getReducers()),
		initialState,
		compose(applyMiddleware(...middleware), ...enhancers)
	);
};
