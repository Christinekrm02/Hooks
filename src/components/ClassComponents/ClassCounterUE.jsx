import React, { Component } from "react";
//Update state with class component using componentDidMount()
export class ClassCounterUE extends Component {
  //Initialize state within constructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //Assign component to HTML element, using iniial state
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  //Set state when component updates after function is called
  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        {/* Use a function to make component dynamic. Function can be created in constructor */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterUE;
