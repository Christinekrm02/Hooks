import React, { Component } from "react";
//Conditionally update state with class component using componentDidMount()
export class ClassCounterConditionalUE extends Component {
  //Initialize state within constructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  //Assign component to HTML element, using iniial state
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  //Set state when component updates after function is called
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Document updating");
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value });
          }}
        />
        {/* Use a function to make component dynamic. Function can be created in constructor */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterConditionalUE;
