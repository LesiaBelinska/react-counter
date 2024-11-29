import React, { Component } from "react";
import Button from "./buttons/Button";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      addition: 0,
    };
  }

  handleAdditionClick = (addValue) => {
    this.setState({
      addition: addValue,
    });
  };

  handleIncrementClick = () => {
    this.setState({
      count: this.state.count + this.state.addition,
    });
  };

  handleDecrementClick = () => {
    this.setState({
      count: this.state.count - this.state.addition,
    });
  };

  handleResetClick = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { addition } = this.state;

    return (
      <div className="counter-wrapper">
        <p>Count: {this.state.count}</p>
        <div className="sum-buttons">
          <Button
            className="num-btn-1"
            buttonText="1"
            onClick={() => this.handleAdditionClick(1)}
          />
          <Button
            className="num-btn-5"
            buttonText="5"
            onClick={() => this.handleAdditionClick(5)}
          />
          <Button
            className="num-btn-10"
            buttonText="10"
            onClick={() => this.handleAdditionClick(10)}
          />
        </div>

        <div className="action-buttons">
          <Button
            className="increment-btn"
            buttonText={`Increase by ${addition}`}
            onClick={this.handleIncrementClick}
          />
          <Button
            className="decrement-btn"
            buttonText={`Decrease by ${addition}`}
            onClick={this.handleDecrementClick}
          />
          <Button
            className="reset-btn"
            buttonText="Reset"
            onClick={this.handleResetClick}
          />
        </div>
      </div>
    );
  }
}

export default ClickCounter;
