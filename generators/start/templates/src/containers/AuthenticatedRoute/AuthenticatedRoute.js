import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const checkedConnect = ({ roles, role_id, logged }) => logged && (!roles || !roles.length || ~roles.indexOf(role_id));

export default ({ component: C, props: cProps, ...rest }) => {
	const allRight = checkedConnect({
		roles: cProps.roles,
		role_id: cProps.current.role_id,
		logged: cProps.logged
	});

	return (
		<Route
			{...rest}
			render={(propsRender) =>
				allRight ? (
					<C {...propsRender} {...cProps} />
				) : (
					<Redirect to={`/login?redirect=${propsRender.location.pathname}${propsRender.location.search}`} />
				)}
		/>
	);
};
