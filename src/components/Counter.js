import React, { Component } from "react";

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 10,
  };

 // это тоже самое что и ниже с конструктором, Бабель потом рендерит это все в правильно
state = {
    value: this.props.initialValue,
};


//   constructor(props) {
//       super(props);

//       this.state = {
//           value: 2,
//           val: props.initialValue;
          
//       };
//   };



  handleInc = (event) => {

    this.setState((prevState, props) => ({ value: prevState.value + this.props.step }));

    // this.setState((prevState, props) => {
    //     return { value: prevState.value +1 };
    // });

    // this.setState((prevState, props) => {
    //     return { value: prevState.value +1 };
    // });

        // console.log("Increment button was clicked!", event); // работает
        // console.log("this.props: ", this.props); // работает
  };

  handleDec = (event) => {
      this.setState((prevState, props) => ({ value: prevState.value - this.props.step }))



        // console.log("Decrement button was clicked!", event); // работает
        // console.log("this.props: ", this.props); // работае
  };

  render() {

    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <span> { value } </span>
        <button
          onClick={this.handleInc}
        >
          Increment by {this.props.step}
        </button>
        <button
          onClick={this.handleDec}
        >
          Decrement by {this.props.step}
        </button>
      </div>
    );
  }
}
