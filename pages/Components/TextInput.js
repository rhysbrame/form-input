import { Component } from "react";

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const input = this.props.value;
    return (
      <div className="form-group">
        <label className="form-label" />
        <input value={input} onChange={this.handleChange} />
      </div>
    );
  }
}
