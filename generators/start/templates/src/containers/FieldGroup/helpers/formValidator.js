const required = (value) => (value ? 'succes' : 'error');

const maxLength = (max) => (value) => (value && value.length ? (value.length > max ? `error` : 'success') : null);

const minLength = (min) => (value) => (value && value.length ? (value.length < min ? `error` : 'success') : null);

const number = (value) => (value && isNaN(Number(value)) ? 'error' : 'success');

const minValue = (min) => (value) => (value && value.length ? (value < min ? `error` : 'success') : null);

const email = (value) =>
	value && value.length ? (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(value) ? 'error' : 'success') : null;

const maxValue = (max) => (value) => (value && value > max ? `Must be maximm ${max}` : undefined);

export { required, maxLength, minLength, number, minValue, email, maxValue };
