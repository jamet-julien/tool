let moduleRoutes = [];
let rootHasCreate = false;
let indexRoute = null;

export const setIndexRoute = function setIndexRoute(route) {
	indexRoute = route;
	return true;
};

export const getIndexRoute = function getIndexRoute() {
	return indexRoute === null ? moduleRoutes[0] : indexRoute;
};

export const registerRoute = function registerRoute(route) {
	if (rootHasCreate) return false;
	moduleRoutes = [ ...moduleRoutes, ...route ];
	return true;
};

export const getRoutes = function getRoutes() {
	rootHasCreate = true;
	return moduleRoutes;
};
