import * as redux from 'react-redux';
import React from 'react';

export class LayoutComponent extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
}

// Attach restoreSettings action to the Component
export function LayoutConnect(mapStateToProps = () => ({}), mapActionCreators = {}) {
	const extendedActionCreators = Object.assign([], mapActionCreators, {});

	const mapStateToPropsFun = (state) => {
		const needValue = mapStateToProps(state);
		return { ...needValue, layout: state.layout };
	};

	return redux.connect(mapStateToPropsFun, extendedActionCreators);
}
