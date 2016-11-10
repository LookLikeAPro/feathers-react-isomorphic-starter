import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@observer
export default class Form extends Component {
	constructor(props) {
		super(props);
		this.updateProperty = this.updateProperty.bind(this);
	}
	updateProperty(event) {
		const key = event.target.name;
		this.props.content[key] = event.target.value;
	}
	static selector = (content) => {
		return (stores) => {
			return {
				content: content,
			};
		};
	};
	static connect = (content) => {
		return (component) => {
			return inject(Form.selector(content))(component);
		}
	};
}
