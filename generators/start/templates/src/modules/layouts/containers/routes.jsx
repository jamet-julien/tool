import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import AppliedRoute from 'containers/AppliedRoute';
import AuthenticatedRoute from 'containers/AuthenticatedRoute';
import UnauthenticatedRoute from 'containers/UnauthenticatedRoute';

import { forceConnect } from 'modules/authentication/actions';

class RoutesSwitch extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (token) {
      this.props.store.dispatch(forceConnect(token, user));
    }
  }
  render() {
    const { logged, current } = this.props.store.getState().authentication;
    return (
      <Switch>
        {this.props.routes.map((routeConf, index) => {
          switch (routeConf.type) {
            case 'authenticated':
              return <AuthenticatedRoute key={index} {...routeConf} props={{ logged, current }} />;
            case 'unauthenticated':
              return <UnauthenticatedRoute key={index} {...routeConf} props={{ logged, current }} />;
            default:
              return <AppliedRoute key={index} {...routeConf} />;
          }
        })}
        <Redirect to={`/`} />
      </Switch>
    );
  }
}

export default RoutesSwitch;
