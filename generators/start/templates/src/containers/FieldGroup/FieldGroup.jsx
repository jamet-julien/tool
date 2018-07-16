import React from 'react';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

import { InputSelect, InputDefault, InputTextarea } from './components';

export const objToState = (obj) => {
	let result = {};
	for (let name in obj) {
		result[name] = '';
	}
	return result;
};

export const filterField = (keys) => (obj) => {
	let objData = {};
	let key;

	for (let name in obj) {
		if (~keys.indexOf(name)) {
			objData[`${name}`] = (key = +obj[`${name}`]) === key ? key : obj[`${name}`];
		}
	}

	return { ...objData };
};

const SwitchInput = ({ type, ...props }) => {
	switch (type) {
		case 'textarea':
			return <InputTextarea {...props} />;
		case 'select':
			return <InputSelect {...props} />;
		default:
			return <InputDefault type={type} {...props} />;
	}
};

class FieldGroup extends React.Component {
	constructor(prop) {
		super(prop);
		this.dom = null;
	}

	render() {
		const { validationState, ...subProp } = this.props;
		let validation = validationState ? validationState() : null;

		return (
			<FormGroup controlId={subProp.name} validationState={validation}>
				{subProp.type !== 'hidden' ? <ControlLabel>{subProp.label}</ControlLabel> : ''}
				<SwitchInput name={subProp.name} {...subProp} label={subProp.label} />
				{subProp.help && <HelpBlock>{subProp.help}</HelpBlock>}
			</FormGroup>
		);
	}
}

const FormCompute = ({ data, ...props }) => {
	const result = [];
	let index = 0;
	for (let name in data) {
		index++;
		result.push(
			<FieldGroup name={name} label={name} placeholder={`Enter ${name}`} key={index} {...props} {...data[name]} />
		);
	}
	return result;
};

export { FieldGroup };
export default FormCompute;
