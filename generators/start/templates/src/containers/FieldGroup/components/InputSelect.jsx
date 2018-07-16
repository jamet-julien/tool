import React from 'react';
import { FormControl } from 'react-bootstrap';

export default ({ name, option, ...props }) => {
  let optDom = [];
  for (let id in option) {
    optDom.push(
      <option key={id} value={id}>
        {option[id]}
      </option>
    );
  }
  return (
    <FormControl componentClass="select" name={name} {...props}>
      <option value="">...</option>
      {optDom}
    </FormControl>
  );
};
