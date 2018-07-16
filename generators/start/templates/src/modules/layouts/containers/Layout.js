import React from 'react';
import PropTypes from 'prop-types';
import Routes from './routes';
import { Grid, Row, Col } from 'react-bootstrap';

import { ConnectedRouter } from 'react-router-redux';

import { Header, AlertDismissable } from './components';

class Layout extends React.Component {
	static childContextTypes = {
		history: PropTypes.object
	};

	getChildContext() {
		return { history: this.props.history };
	}

	render() {
		return (
			<ConnectedRouter history={this.props.history}>
				<Grid fluid={true}>
					<Row>
						<Col>
							<Header routes={this.props.routes} />
						</Col>
					</Row>
					<Row>
						<Col md={8} mdPush={2}>
							<AlertDismissable />
						</Col>
					</Row>
					<Row>
						<Col md={8} mdPush={2}>
							<Routes routes={this.props.routes} store={this.props.store} />
						</Col>
					</Row>
				</Grid>
			</ConnectedRouter>
		);
	}
}

export default Layout;
