const libRequest = {};

export const registerRequest = function registerRequest(name, caller) {
	if (!libRequest[name]) libRequest[name] = caller;
	return true;
};

export const sendRequest = function sendRequest(name, path = {}, data = {}) {
	if (!libRequest[name]) throw new Error(`${name} not found`);
	return libRequest[name](path, data);
};

export const registerRequests = function registerRequests(requests) {
	for (let name in requests) {
		registerRequest(name, requests[name]);
	}
};

export const getLibRequest = function getLibRequest() {
	return libRequest;
};

const Api = {
	sendRequest
};

export default Api;
