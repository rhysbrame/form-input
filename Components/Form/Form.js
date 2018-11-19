import React, { Component, Fragment } from "react";
import FormInput from "./FormInput";
import { FormErrors } from "./FormErrors";

const minLength = length => value => value.length >= length;
const matchesRegex = regex => value => value.match(regex);

const validators = {
  firstName: { test: minLength(3), errorMessage: "First name is too short" },
  secondName: { test: minLength(3), errorMessage: "Second name is too short" },
  town: { test: minLength(3), errorMessage: "Town is too short" },
  email: {
    test: matchesRegex(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    errorMessage: "Email is invalid"
  },
  phoneNumber: {
    test: matchesRegex(/^\d{11}$|^$/),
    errorMessage: "Phone number is not a valid number with 11 digits"
  }
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: this.props.firstName || "",
        secondName: this.props.secondName || "",
        town: this.props.town || "",
        phoneNumber: this.props.phoneNumber
          ? this.props.phoneNumber.replace(/\s+/g, "")
          : "",
        email: this.props.email || ""
      },
      formErrors: {
        firstName: null,
        secondName: null,
        town: null,
        phoneNumber: null,
        email: null
      }
    };
  }

  validateForm(callback) {
    const { values } = this.state;
    const errors = {};

    Object.keys(values).forEach(fieldName => {
      const { test, errorMessage } = validators[fieldName];
      const value = values[fieldName];
      const valid = test(value);
      errors[fieldName] = !valid ? errorMessage : null;
    });

    this.setState({ formErrors: errors }, callback);
  }

  setField = fieldName => value => {
    this.setState({
      values: {
        ...this.state.values,
        [fieldName]: value
      }
    });
  };

  handleSubmit = event => {
    this.validateForm();
    //keep this console.log here to send final data object
    console.log("Form Data:", this.state.values);
    event.preventDefault();
  };

  render() {
    const { values, formErrors } = this.state;

    return (
      <Fragment>
        <div style={{ ["textAlign"]: "center" }}>
          <div>
            <FormErrors formErrors={formErrors} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              value={values.firstName}
              onInputChange={this.setField("firstName")}
              label="First Name:"
              invalid={Boolean(formErrors.firstName)}
            />
            <FormInput
              value={values.secondName}
              onInputChange={this.setField("secondName")}
              label="Second Name:"
              invalid={Boolean(formErrors.secondName)}
            />
            <FormInput
              value={values.town}
              onInputChange={this.setField("town")}
              label="Town:"
              invalid={Boolean(formErrors.town)}
            />
            <FormInput
              value={values.phoneNumber}
              onInputChange={this.setField("phoneNumber")}
              label="Phone Number:"
              invalid={Boolean(formErrors.phoneNumber)}
            />
            <FormInput
              value={values.email}
              onInputChange={this.setField("email")}
              label="Email:"
              invalid={Boolean(formErrors.email)}
            />
            <button id="submitButton" type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Form;
