import { registerRequest, sendRequest, getLibRequest } from 'helpers/registers';

describe('request register', () => {
	it('registerRequest', async () => {
		let mockCallback = jest.fn();
		expect(registerRequest('zero', mockCallback)).toBeTruthy();
	});

	it('sendRequest', async () => {
		let mockCallback = jest.fn();
		registerRequest('first', mockCallback);
		sendRequest('first', {}, {});
		expect(mockCallback.mock.calls.length).toBe(1);
	});

	it('read first Args', async () => {
		let mockCallback = jest.fn();
		const path = { opt: 'lib' };
		const data = { name: 'lorem' };
		registerRequest('second', mockCallback);
		sendRequest('second', path, data);
		expect(mockCallback.mock.calls[0][0]).toEqual(path);
	});

	it('read second Args', async () => {
		let mockCallback = jest.fn();
		const path = { opt: 'lib' };
		const data = { name: 'lorem' };
		registerRequest('third', mockCallback);
		sendRequest('third', path, data);
		expect(mockCallback.mock.calls[0][1]).toEqual(data);
	});
});
