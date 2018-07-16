import React, { Component } from 'react';
import './Toogle.css';

function makeid() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.name = makeid();
  }
  render() {
    return (
      <label className="toogleLabel" htmlFor={this.name} onMouseDown={this.props.onMouseDown}>
        <input
          className={this.props.wait ? 'toogleInput wait' : 'toogleInput'}
          checked={this.props.checked}
          type="checkbox"
          name={this.name}
          id={this.name}
          onChange={this.props.onChange}
        />
        <span className="toogleSpan" />
      </label>
    );
  }
}
