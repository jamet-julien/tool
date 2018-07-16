import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'modules/authentication/actions';

class LoginContent extends React.Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <p>Déconnection ...</p>;
  }
}
const mapStateToProps = state => ({
  authentication: state.authentication,
});

const mapActionCreators = {
  logout,
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(LoginContent);
