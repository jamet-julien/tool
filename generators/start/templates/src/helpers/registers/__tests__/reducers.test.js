import { registerReducer, getReducers } from 'helpers/registers';

const defaultLayout = { contener: 'dom' };

describe('reducers register', () => {
	it('first registerReducer', async () => {
		expect(registerReducer('initial', defaultLayout)).toBeTruthy();
	});

	it('get registerReducer', async () => {
		registerReducer('initial', defaultLayout);
		expect(getReducers()).toEqual({ initial: defaultLayout });
	});

	it('second registerReducer', async () => {
		registerReducer('initial', defaultLayout);
		expect(registerReducer('initial', defaultLayout)).toBeFalsy();
	});

	it('multi registerReducer', async () => {
		registerReducer('initial', defaultLayout);
		registerReducer('initial', defaultLayout);
		expect(getReducers()).toEqual({ initial: defaultLayout });
	});
});
