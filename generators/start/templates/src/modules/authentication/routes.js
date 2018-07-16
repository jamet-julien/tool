import asyncComponent from 'containers/AsyncComponent';

export default [
	{
		path: '/login',
		exact: true,
		title: 'Login',
		type: 'unauthenticated',
		component: asyncComponent(() => import('./containers/Login'))
	},
	{
		path: '/logout',
		exact: true,
		title: 'logout',
		type: 'authenticated',
		roles: [ 1, 2, 3, 4 ],
		component: asyncComponent(() => import('./containers/Logout'))
	}
];
