import React, { Component } from "react";

import "./assets/increment.css";
export default class Home extends Component {
  render() {
    return (
      <div className="ctn">
        <span>Counter: {this.props.counter}</span>
        <div>
          <button className="danger" onClick={this.props.counterIncrement}>
            INCREMENT
          </button>
          <button className="blue" onClick={this.props.counterDecrement}>
            DECREMENT
          </button>
        </div>
      </div>
    );
  }
}
