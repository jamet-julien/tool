import { factoryPayload } from 'helpers/factoryAction';
import {
	LOADING,
	LOADED,
	LOADED_FAILURE,
	ADDING,
	ADDED,
	ADDED_FAILURE,
	UPDATING,
	UPDATED,
	UPDATED_FAILURE
} from '../constants';
import { API_GET, API_ADD, API_UPDATE, API_DELETE } from '../requests/%FILE_NAME%';


const actions = {
	load: {
		start: () => factoryPayload(LOADING),
		success: (payload, paramsUrl, data) => factoryPayload(LOADED, {items : payload.items}),
		error: (payload) => factoryPayload(LOADED_FAILURE)
	},
	add: {
		start: () => factoryPayload(ADDING),
		success: (payload, paramsUrl, data) => factoryPayload(ADDED, { items: payload.items }),
		error: (payload) => factoryPayload(ADDED_FAILURE)
	},
	update:{
		start: () => factoryPayload(UPDATING),
		success: (payload, paramsUrl, data) => factoryPayload(UPDATED, { items: payload.items }),
		error: (payload) => factoryPayload(UPDATED_FAILURE)
	},
	delete: {
		start: () => factoryPayload(DELETING),
		success: (payload, paramsUrl, data) => factoryPayload(DELETED, { items: payload.items }),
		error: (payload) => factoryPayload(DELETED_FAILURE)
	}
};

export const get%KAMEL_NAME% = (paramsUrl) => (dispatch, getState, Api) => {
	dispatch(actions.load.start());
	Api.sendRequest(API_GET, paramsUrl, {}).then(({ status, payload }) => {
    if (status === 'SUCCESS') {
			dispatch(actions.load.success(payload, paramsUrl, {}));
    } else {
			dispatch(actions.load.error(payload));
    }
  });
};

export const add%KAMEL_NAME% = (paramsUrl, data) => (dispatch, getState, Api) => {
	dispatch(actions.add.start());
	Api.sendRequest(API_ADD, paramsUrl, data).then(({ status, payload }) => {
		if (status === 'SUCCESS') {
			dispatch(actions.add.success(payload, paramsUrl, data));
		} else {
			dispatch(actions.add.error(payload));
		}
	});
};

export const update%KAMEL_NAME% = (paramsUrl, data) => (dispatch, getState, Api) => {
	dispatch(actions.update.start());
	Api.sendRequest(API_UPDATE, paramsUrl, data).then(({ status, payload }) => {
		if (status === 'SUCCESS') {
			dispatch(actions.update.success(payload, paramsUrl, data));
		} else {
			dispatch(actions.update.error(payload));
		}
	});
};

export const delete%KAMEL_NAME% = (paramsUrl, data) => (dispatch, getState, Api) => {
	dispatch(actions.delete.start());
	Api.sendRequest(API_DELETE, paramsUrl, data).then(({ status, payload }) => {
		if (status === 'SUCCESS') {
			dispatch(actions.delete.success(payload, paramsUrl, data));
		} else {
			dispatch(actions.delete.error(payload));
		}
	});
};

