import { SET_SHOW_ALERT } from './constants';

let initialState = {
	alert: {
		show: false,
		title: 'Oops !',
		msg: "What's happen",
		type: 'warning' //"success", "warning", "danger", "info"
	}
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case SET_SHOW_ALERT:
			return { ...state, alert: { ...state.alert, ...action.payload } };
		default:
			return state;
	}
};

export default reducers;
