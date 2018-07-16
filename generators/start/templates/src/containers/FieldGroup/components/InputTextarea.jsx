import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl } from 'react-bootstrap';

class InputTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.extendProps = {};
    this.launchResize = callBack => e => {
      e.target.style.height = 0;
      e.target.style.height = `${e.target.scrollHeight}px`;

      if (callBack) {
        callBack(e);
      }
    };
  }

  componentWillMount() {
    if (this.props.autoresize) {
      this.extendProps.onKeyUp = this.launchResize(this.props.onKeyUp);
    }
  }

  componentDidMount() {
    const target = ReactDOM.findDOMNode(this);

    if (this.props.autoresize) {
      this.launchResize()({ target });
    }
  }

  render() {
    return <FormControl componentClass="textarea" {...this.props} {...this.extendProps} />;
  }
}

export default InputTextarea;
