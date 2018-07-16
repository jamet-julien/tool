import React from 'react';
import { connect } from 'react-redux';
import { toLogged } from 'modules/authentication/actions';

import { Col, Button } from 'react-bootstrap';
import FormCompute, { objToState } from 'containers/FieldGroup';

const formRef = {
  email: { type: 'text' },
  password: { type: 'password' },
};

class LoginContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { ...objToState(formRef) };
  }

  handleChange(e) {
    this.setState({ [`${e.target.name}`]: e.target.value });
  }
  render() {
    return (
      <Col md={6} mdPush={3}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.toLogged(this.state);
          }}
        >
          <FormCompute data={formRef} onChange={this.handleChange.bind(this)} />
          <Button type="submit">Connect</Button>
        </form>
      </Col>
    );
  }
}
const mapStateToProps = state => ({
  authentication: state.authentication,
});

const mapActionCreators = {
  toLogged,
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(LoginContent);
