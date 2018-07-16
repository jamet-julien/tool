import React from 'react';
import { FormControl } from 'react-bootstrap';

export default ({ name, ...props }) => <FormControl name={name} {...props} />;
