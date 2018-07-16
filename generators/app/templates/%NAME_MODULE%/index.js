import { registerReducer, registerRoute, registerRequests } from 'helpers/registers';
import { %LOWER_NAME%Reducer } from './reducers';

import routes from './routes';

import { %LOWER_NAME%Requests } from './requests';

export default {
	install: () => {
		registerRoute(routes);
		registerRequests(%LOWER_NAME%Requests);
		registerReducer('%LOWER_NAME%', %LOWER_NAME%Reducer);
	}
};
