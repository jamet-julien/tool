import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import { hideAlert } from '../../actions';

class AlertDismissable extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleDismiss = this.handleDismiss.bind(this);
	}

	handleDismiss() {
		this.props.hideAlert();
	}

	render() {
		return this.props.alert.show ? (
			<Alert bsStyle={this.props.alert.type} onDismiss={this.handleDismiss}>
				<h4>{this.props.alert.title}</h4>
				<p>{this.props.alert.msg}</p>
			</Alert>
		) : (
			''
		);
	}
}

const mapStateToProps = (state) => ({ alert: state.layout.alert });
const mapActionCreators = { hideAlert };
export default connect(mapStateToProps, mapActionCreators)(AlertDismissable);
