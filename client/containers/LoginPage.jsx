import React, {Component} from 'react';
import {observable, action} from "mobx";
import Form from "containers/Form";
import app from "app";

class Content {
	@observable password = "";
	@observable email = "";
}

@Form.connect(new Content())
class SignupPage extends Form {
	submit = (e) => {
		e.preventDefault();
		const {content} = this.props;
		app.authenticate({
			type: 'local',
			email: content.email,
			password: content.password
		}).then(function(result){
			console.log('Authenticated!', result);
		}).catch(function(error){
			console.error('Error authenticating!', error);
		});
	};
	render() {
		return (
			<form onSubmit={this.submit}>
				<input name="email" type="text" placeholder="Email" onChange={this.updateProperty} />
				<input name="password" type="password" placeholder="Password" onChange={this.updateProperty} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default SignupPage;
