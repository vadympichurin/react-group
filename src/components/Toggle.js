import React, { Component } from "react";

export default class Toggle extends Component {
  state = { on: false };

// setState - это вызов синхронной операции, которое запускает ассинхронный стейт.

toggle = () => {
    this.setState((prevState) => ({ on: !prevState.on }));
}

//   show = () => {
//       this.setState({ 
//           on: true,
//         })
//     };
//   hide = () => this.setState({ on: false });

  render() {

    const { on } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{ on ? 'Hide' : 'Show' }</button>
        {/* <button onClick={this.toggle}>Hide</button> */}
        { on && children  // если on true то показать чилдрена
        } 
      </div>
    );
  }
}
