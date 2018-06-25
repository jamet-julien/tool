import { buildCaller } from 'helpers/apiClient';

const getCaller = buildCaller(process.env.REACT_APP_API_URL);
const api = getCaller('%API_ROOT%');

const scope = '%UPPER_NAME%';

export const API_GET = `${scope}_GET`;
export const API_ADD = `${scope}_ADD`;
export const API_UPDATE = `${scope}_UPDATE`;
export const API_DELETE = `${scope}_DELETE`;

export default {
	[`${API_GET}`]: api.get({}),
	[`${API_ADD}`]: api.post({}),
	[`${API_UPDATE}`]: api.put({}),
	[`${API_DELETE}`]: api.del({})
};
