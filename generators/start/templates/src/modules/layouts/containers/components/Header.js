import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({ layout: state.layout, authentication: state.authentication });
const mapActionCreators = {};

class HeaderContent extends React.Component {
  render() {
    const {
      logged,
      current: { role_id },
    } = this.props.authentication;
    const routes = this.props.routes;

    const typeValid = !logged ? 'unauthenticated' : 'authenticated';

    const checkedConnect = ({ roles, role_id, logged }) =>
      logged && (!roles || !roles.length || ~roles.indexOf(role_id));

    return (
      <Navbar>
        <Nav pullRight activeKey="1">
          {routes
            .filter(
              ({ title, type, roles }) => title && type === typeValid && checkedConnect({ roles, role_id, logged })
            )
            .map((route, index) => (
              <NavItem eventKey={index} key={index} componentClass={Link} href={route.path} to={route.path}>
                {route.title}
              </NavItem>
            ))}
        </Nav>
      </Navbar>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionCreators
)(HeaderContent);
