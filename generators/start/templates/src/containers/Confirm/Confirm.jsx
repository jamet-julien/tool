import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentWillMount() {
    this.extendProps = {
      ...this.props,
      onMouseDown: () => {
        this.setState({ show: true });
      },
    };
    if (this.extendProps.message) {
      delete this.extendProps.message;
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <span style={{ marginRight: '5px' }} className="pull-right">
        <Button {...this.extendProps}>{this.props.children}</Button>

        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm !</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.message}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose.bind(this)} bsStyle="danger">
              cancel
            </Button>
            <Button
              onClick={e => {
                this.props.onMouseDown(e);
                this.setState({ show: false });
              }}
              bsStyle="primary"
            >
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
