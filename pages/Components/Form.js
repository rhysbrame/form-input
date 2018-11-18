import React, { Component, Fragment } from "react";
import FormInput from "./FormInput";
import { FormErrors } from "./FormErrors";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSecondNameChange = this.handleSecondNameChange.bind(this);
    this.handleTownChange = this.handleTownChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: "",
      secondName: "",
      town: "",
      phoneNumber: "",
      email: "",
      formErrors: {
        firstName: "",
        secondName: "",
        town: "",
        phoneNumber: "",
        email: ""
      },
      firstNameValid: false,
      secondNameValid: false,
      townValid: false,
      phoneNumberValid: false,
      emailValid: false,
      formValid: false
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let secondNameValid = this.state.secondNameValid;
    let townValid = this.state.townValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "firstName":
        firstNameValid = value.length >= 3;
        fieldValidationErrors.firstName = firstNameValid ? "" : " is too short";
        break;
      case "secondName":
        secondNameValid = value.length >= 3;
        fieldValidationErrors.secondName = secondNameValid
          ? ""
          : " is too short";
        break;
      case "town":
        townValid = value.length >= 3;
        fieldValidationErrors.town = townValid ? "" : " is too short";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "phoneNumber":
        phoneNumberValid = value.match(/^\d{11}$|^$/);
        fieldValidationErrors.phoneNumber = phoneNumberValid
          ? ""
          : " not a valid phone number with 11 digits";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        firstNameValid: firstNameValid,
        secondNameValid: secondNameValid,
        townValid: townValid,
        phoneNumberValid: phoneNumberValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.firstNameValid &&
        this.state.secondNameValid &&
        this.state.townValid &&
        this.state.phoneNumberValid
    });
  }

  handleFirstNameChange(value) {
    this.setState({ firstName: value }, () => {
      this.validateField("firstName", value);
    });
  }

  handleSecondNameChange(value) {
    this.setState({ secondName: value }, () => {
      this.validateField("secondName", value);
    });
  }

  handleTownChange(value) {
    this.setState({ town: value }, () => {
      this.validateField("town", value);
    });
  }

  handlePhoneNumberChange(value) {
    this.setState({ phoneNumber: value }, () => {
      this.validateField("phoneNumber", value);
    });
  }

  handleEmailChange(value) {
    this.setState({ email: value.toLowerCase() }, () => {
      this.validateField("email", value);
    });
  }

  handleSubmit(event) {
    const dataJSON = {
      "First Name:": this.state.firstName,
      "Second Name:": this.state.secondName,
      "Town:": this.state.town,
      "Phone Number:": this.state.phoneNumber,
      "Email:": this.state.email
    };
    //keep this console.log here to send final data object
    console.log("Form Data:", dataJSON);
    event.preventDefault();
  }

  render() {
    const firstName = this.state.firstName;
    const secondName = this.state.secondName;
    const town = this.state.town;
    const phoneNumber = this.state.phoneNumber;
    const email = this.state.email;

    return (
      <Fragment>
        <div style={{ ["textAlign"]: "center" }}>
          <div>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              value={firstName}
              onInputChange={this.handleFirstNameChange}
              label="First Name:"
            />
            <FormInput
              value={secondName}
              onInputChange={this.handleSecondNameChange}
              label="Second Name:"
            />
            <FormInput
              value={town}
              onInputChange={this.handleTownChange}
              label="Town:"
            />
            <FormInput
              value={phoneNumber}
              onInputChange={this.handlePhoneNumberChange}
              label="Phone Number:"
            />
            <FormInput
              value={email}
              onInputChange={this.handleEmailChange}
              label="Email:"
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.state.formValid}
            >
              Submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Form;
