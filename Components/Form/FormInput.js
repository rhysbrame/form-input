import React, { Component } from "react";

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const input = this.props.value;
    const label = this.props.label;
    const invalid = this.props.invalid;

    return (
      <div className="form-group">
        <label className="form-label">
          {label}
          <input
            id="input"
            className={`form-control ${invalid ? "is-invalid" : ""}`}
            value={input}
            onChange={this.handleChange}
            type="text"
          />
        </label>
      </div>
    );
  }
}
