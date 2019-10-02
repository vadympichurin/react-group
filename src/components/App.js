import React, { Component } from "react";
import Counter from "./Counter";
import Toggle from "./Toggle";
import MessageUpdater from "./MessageUpdater";
import StepChanger from './StepChanger';

export default class App extends Component {
  state = {
    message: Date.now(),
    counterState: 0,
  };

  handleChangeStep = () => {
      this.setState((prevState) => ({
          counterState: prevState.counterState + 1,
      }));
  };

  updateMessage = () => {
    this.setState({
      message: Date.now()
    });
  };

  render() {

    const { counterState } = this.state;

    return (
      <div>

          <StepChanger counterState={this.state.counterState} onUpdateStep={this.handleChangeStep} />
          <Counter step={this.state.counterState} initialValue={10} />




        {/* <MessageUpdater changeMessage={this.updateMessage} /> */}

        {/* <h2>{this.state.message}</h2> */}

        {/* <Toggle>
          <h1> Togglable content </h1>
          <Counter step={this.state.counterState} initialValue={10} />
        </Toggle> */}
      </div>
    );
  }
}
