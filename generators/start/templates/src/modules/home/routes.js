import asyncComponent from 'containers/AsyncComponent';

export default [
  {
    path: '/',
    exact: true,
    type: 'authenticated',
    component: asyncComponent(() => import('./containers/Home')),
  },
];
