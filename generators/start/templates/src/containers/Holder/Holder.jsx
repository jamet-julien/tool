import React from 'react';
import { Button } from 'react-bootstrap';
import './Holder.css';

export class Holder extends React.Component {
  constructor(props) {
    super(props);
    this.extendProps = {};
    this.timer = null;
    this.holding = callBack => e => {
      e.target.classList.add('hold');
      this.timer = setTimeout(() => {
        callBack(e);
      }, 3000);
    };

    this.clearHolding = callBack => e => {
      clearTimeout(this.timer);
      e.target.classList.remove('hold');
      if (callBack) {
        callBack(e);
      }
    };
  }

  componentWillMount() {
    this.extendProps = {
      ...this.props,
      onMouseDown: this.holding(this.props.onMouseDown),
      onMouseUp: this.clearHolding(this.props.onMouseUp),
    };
  }

  render() {
    return <Button {...this.extendProps}>{this.props.children}</Button>;
  }
}
