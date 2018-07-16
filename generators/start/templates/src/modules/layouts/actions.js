import { SET_SHOW_ALERT } from './constants';

//"success", "warning", "danger", "info"

export const showDanger = ({ title, msg }) => ({
	type: SET_SHOW_ALERT,
	payload: { title, msg, type: 'danger', show: true }
});

export const showSuccess = ({ title, msg }) => ({
	type: SET_SHOW_ALERT,
	payload: { title, msg, type: 'success', show: true }
});

export const showInfo = ({ title, msg }) => ({
	type: SET_SHOW_ALERT,
	payload: { title, msg, type: 'info', show: true }
});

export const showWarning = ({ title, msg }) => ({
	type: SET_SHOW_ALERT,
	payload: { title, msg, type: 'warning', show: true }
});

export const hideAlert = () => ({
	type: SET_SHOW_ALERT,
	payload: { show: false }
});
