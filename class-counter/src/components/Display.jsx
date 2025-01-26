import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleInc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  handleDec = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };
  //   handleInc = () => {
  //     this.setState.count((prevState) => ({ count: prevState + 1 }));
  //   };
  //   handleDec = () => {
  //     this.setState.count((prevState) => ({ count: prevState - 1 }));
  //   };
  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.handleInc}>
          Increment
        </button>
        <button type="button" onClick={this.handleDec}>
          Decrement
        </button>
      </>
    );
  }
}
export default Counter;
