import { Component } from "react";

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
    return (
      <div className="form-group">
        <label className="form-label">
          {label}
          <input
            className="form-control"
            value={input}
            onChange={this.handleChange}
            type="text"
          />
        </label>
      </div>
    );
  }
}
