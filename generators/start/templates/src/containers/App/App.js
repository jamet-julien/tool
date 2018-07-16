import React, { Component } from 'react';
import { Layout } from 'modules/layouts';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<Layout history={this.props.history} store={this.props.store} routes={this.props.routes} />
			</Provider>
		);
	}
}

export default App;
