import React, { Component } from "react";
import TextInput from "./TextInput";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSecondNameChange = this.handleSecondNameChange.bind(this);
    this.handleTownChange = this.handleTownChange.bind(this);
    this.state = {
      firstName: "",
      secondName: "",
      town: ""
    };
  }

  handleFirstNameChange(value) {
    console.log("***f***", this.state.firstName);
    this.setState({ firstName: value });
  }

  handleSecondNameChange(value) {
    console.log("***s***", this.state.secondName);
    this.setState({ secondName: value });
  }

  handleTownChange(value) {
    console.log("***t***", this.state.town);
    this.setState({ town: value });
  }

  render() {
    const firstName = this.state.firstName;
    const secondName = this.state.secondName;
    const town = this.state.town;

    return (
      <form>
        <TextInput
          value={firstName}
          onInputChange={this.handleFirstNameChange}
        />
        <TextInput
          value={secondName}
          onInputChange={this.handleSecondNameChange}
        />
        <TextInput value={town} onInputChange={this.handleTownChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
