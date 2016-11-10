import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from 'components/Layout';

import IndexPage from 'containers/IndexPage';
import NotFoundPage from 'containers/NotFoundPage';
import SignupPage from 'containers/SignupPage';
import LoginPage from 'containers/LoginPage';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={IndexPage}/>
		<Route path="signup" component={SignupPage}/>
		<Route path="login" component={LoginPage}/>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);

import { Router, browserHistory } from 'react-router';
export default class AppRoutes extends React.Component {
	render() {
		return (
			<Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
		);
	}
}
