import {
	LOADING,
	LOADED,
	LOADED_FAILURE,
	ADDING,
	ADDED,
	ADDED_FAILURE,
	UPDATING,
	UPDATED,
	UPDATED_FAILURE,
	DELETING,
	DELETED,
	DELETED_FAILURE
} from "../constants";
import { API_GET, API_ADD, API_UPDATE, API_DELETE } from '../requests/%FILE_NAME%';


const actions = {
	load: {
		start: () => ({type:LOADING}),
		success: (payload, paramsUrl, data) => ({type:LOADED, payload:{items : payload.items}}),
		error: (payload) => ({type:LOADED_FAILURE})
	},
	add: {
		start: () => ({type:ADDING}),
		success: (payload, paramsUrl, data) => ({type:ADDED, payload:{ items: payload.items }}),
		error: (payload) => ({type:ADDED_FAILURE})
	},
	update:{
		start: () => ({type:UPDATING}),
		success: (payload, paramsUrl, data) => ({type:UPDATED, payload:{ items: payload.items }}),
		error: (payload) => ({type:UPDATED_FAILURE})
	},
	delete: {
		start: () => ({type:DELETING}),
		success: (payload, paramsUrl, data) => ({type:DELETED, payload:{ items: payload.items }}),
		error: (payload) => ({type:DELETED_FAILURE})
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
	return Api.sendRequest(API_ADD, paramsUrl, data).then(({ status, payload }) => {
		if (status === 'SUCCESS') {
			dispatch(actions.add.success(payload, paramsUrl, data));
		} else {
			dispatch(actions.add.error(payload));
		}
	});
};

export const update%KAMEL_NAME% = (paramsUrl, data) => (dispatch, getState, Api) => {
	dispatch(actions.update.start());
	return Api.sendRequest(API_UPDATE, paramsUrl, data).then(({ status, payload }) => {
		if (status === 'SUCCESS') {
			dispatch(actions.update.success(payload, paramsUrl, data));
		} else {
			dispatch(actions.update.error(payload));
		}
	});
};

export const delete%KAMEL_NAME% = (paramsUrl, data) => (dispatch, getState, Api) => {
	dispatch(actions.delete.start());
	return Api.sendRequest(API_DELETE, paramsUrl, data).then(({ status, payload }) => {
		if (status === 'SUCCESS') {
			dispatch(actions.delete.success(payload, paramsUrl, data));
		} else {
			dispatch(actions.delete.error(payload));
		}
	});
};

