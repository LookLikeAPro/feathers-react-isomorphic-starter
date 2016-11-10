import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
	render() {
		return (
			<div>
				<header>
					<Link to={'/'}>Home</Link>|
					<Link to={'/login'}>Login</Link>|
					<Link to={'/signup'}>Signup</Link>
				</header>
				<div>{this.props.children}</div>
				<footer>
					Made with 10x
				</footer>
			</div>
		);
	}
}
