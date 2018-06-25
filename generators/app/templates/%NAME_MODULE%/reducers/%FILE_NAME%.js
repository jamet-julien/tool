import {
	LOADED,
	ADDED,
	UPDATED,
	DELETED
} from '../constants';

const Item = (data, action) => {
	switch (action.type) {
		case DELETED:
			return data.id !== action.payload.id;

		case UPDATED:
			return data.id === action.payload.id ? action.payload : data;

		case ADDED:
			return { ...action.payload.data};

		default:
			return data;
	}
};

const %KAMEL_NAME% = (state = { items: [], current: {}, chapter: {} }, action) => {
	switch (action.type) {
		case UPDATED:
			return {
				...state,
				items: [...state.items.map((u) => Item(u, action))]
			};

		case ADDED:
			return { ...state, items: [...state.items, Item( undefined, action)] };

		case LOADED:
			return {
				...state,
				items: action.payload.items
			};

		case DELETED:
			return {
				...state,
				items: [...state.items.filter((u) => Item(u, action))]
			};

		default:
			return state;
	}
};

export default %KAMEL_NAME%;
