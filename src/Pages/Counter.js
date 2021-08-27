import React from "react";
import "./Styles.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  onIncrement = () => {
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({ counter });
  };

  onDecrement = () => {
    let { counter } = this.state;
    counter = counter - 1;
    if (counter >= 0) {
      this.setState({ counter });
    }
  };
  onReset = () => {
    let counter = 0;
    this.setState({counter});
    
  };

  render() {
    return (
      <div id="counter">
        <div>
          <h3>Counter</h3>
        </div>
        <div>{this.state.counter}</div>
        <div>
          <input
            type="button"
            value="+"
            style={{ margin: "10px" }}
            onClick={this.onIncrement}
          />
          <input
            type="button"
            value="Reset"
            style={{ margin: "10px" }}
            onClick={this.onReset}
          />
          <input
            type="button"
            value="-"
            style={{ margin: "10px" }}
            onClick={this.onDecrement}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
