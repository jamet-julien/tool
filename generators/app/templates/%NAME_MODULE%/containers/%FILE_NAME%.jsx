import React from 'react';
import { connect } from 'react-redux';
import { get%KAMEL_NAME%, add%KAMEL_NAME%, update%KAMEL_NAME%, delete%KAMEL_NAME%} from 'modules/%MODULE_NAME%';

import { reloadedPromise } from 'helpers/factoryAction';

import { ListGroup, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RootContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { defaultText: 'Loading...' };
	}

	componentDidMount() {
		const promise%KAMEL_NAME% = reloadedPromise(this.props.%LOWER_NAME%.length, this.props.get%KAMEL_NAME%);

		promise%KAMEL_NAME%().then(() => {}).catch(({ errors }) => {
			if (errors[0]) {
				this.setState({ defaultText: 'Empty :(' });
			} else {
				this.setState({ defaultText: 'ERROR' });
			}
		});
	}

	render() {
		const { %LOWER_NAME% } = this.props;
	if( %LOWER_NAME%.length) {
			return (
				<Grid fluid>
					<Row>
						<Col xs={12}>
							<PageHeader>
								<span style={{ display: 'inline-block', marginRight: '10px' }}>%KAMEL_NAME%</span>
							</PageHeader>
						</Col>
					</Row>

					<Row>
						<Col xs={12}>
							<ListGroup>
								{%LOWER_NAME%.map((item, index) => (
									<Link
										className="list-group-item"
										to={`${location.pathname}/${item.id}`}
										key={index}
									>
										{item.title}
									</Link>
								))}
							</ListGroup>
						</Col>
					</Row>
				</Grid>
			);
		} else {
			return <div>{this.state.defaultText}</div>;
		}
	}
}

const mapStateToProps = (state) => {
	return { %LOWER_NAME%: state.%LOWER_NAME%.items };
};

const mapDispatchToProps = {
	get%KAMEL_NAME%,
	add%KAMEL_NAME%,
	update%KAMEL_NAME%,
	delete%KAMEL_NAME%
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
