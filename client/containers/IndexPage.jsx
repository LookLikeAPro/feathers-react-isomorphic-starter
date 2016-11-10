import React from 'react';

import app from "app";

app.authenticate().then(function(result){
	console.log('Authenticated!', result);
}).catch(function(error){
	console.error('Error authenticating!', error);
});

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className="home">
				<h1>Home</h1>
			</div>
		);
	}
}
