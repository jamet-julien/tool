import asyncComponent from 'containers/AsyncComponent';

export default [
	{
		path: '/%LOWER_NAME%',
		exact: true,
		title: '%LOWER_NAME%',
		type: 'authenticated',
		roles: [],
		component: asyncComponent(() => import('./containers/%FILE_NAME%'))
	}
];
