import * as React from "react";
import { shallow } from "enzyme";
import Form from "../Components/Form";
import sinon from "sinon";
import FormInput from "../Components/FormInput";

describe("Form spec", function() {
  const getWrapper = props => shallow(<Form {...props} />);

  it("should render form", () => {
    const wrapper = getWrapper();
    const form = wrapper.find("form");
    expect(form.exists()).toBe(true);
  });
  it("should render FormErrors", function() {
    const wrapper = getWrapper({
      formErrors: {
        foo: "bar"
      }
    });
    const errors = wrapper.find("FormErrors");
    expect(errors.exists()).toBe(true);
  });
  it("should execute correct method on submit", () => {
    const handleSubmit = sinon.spy();
    const wrapper = getWrapper({ handleSubmit });
    const form = wrapper.find("form");
    const e = { preventDefault: sinon.spy() };
    form.simulate("submit", e);
    expect(wrapper.find("form").exists()).toBe(true);
    expect(e.preventDefault.called).toBe(true);
    // expect(handleSubmit.called).toBe(true);
  });
  it("should have correct initial state", () => {
    const wrapper = getWrapper();
    const initialState = {
      email: "",
      emailValid: false,
      firstName: "",
      firstNameValid: false,
      formErrors: {
        email: "",
        firstName: "",
        phoneNumber: "",
        secondName: "",
        town: ""
      },
      formValid: false,
      phoneNumber: "",
      phoneNumberValid: false,
      secondName: "",
      secondNameValid: false,
      town: "",
      townValid: false
    };
    expect(wrapper.state()).toEqual(initialState);
  });
  describe("should pass the correct props", () => {
    it("to the first name form input", () => {
      const handleFirstNameChange = jest.fn();
      const wrapper = getWrapper({
        onInputChange: handleFirstNameChange()
      });
      const event = {
        preventDefault() {},
        target: { value: "the-value" }
      };
      const formInput = wrapper.find(FormInput).at(0);
      expect(formInput.exists()).toBe(true);
      expect(formInput.prop("value")).toBe("");
      expect(formInput.prop("label")).toBe("First Name:");
      // formInput.simulate("change", event);
      // expect(handleFirstNameChange.mock.calls[0][0]).toBe("the-value");
    });
  });
});
