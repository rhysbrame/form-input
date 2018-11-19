import React from "react";
import { shallow } from "enzyme";
import Form from "../Form";
import sinon from "sinon";
import FormInput from "../FormInput";

describe("Form spec", function() {
  const getWrapper = props => shallow(<Form {...props} />);

  it("should render form", () => {
    const wrapper = getWrapper();
    const form = wrapper.find("form");
    expect(form.exists()).toBe(true);
  });
  describe("Form Input", () => {
    it("should render first name", () => {
      const firstName = "foo";
      const wrapper = getWrapper({ firstName });
      const formInput = wrapper.find(FormInput).at(0);
      expect(formInput.exists()).toBe(true);
      expect(formInput.prop("value")).toBe(firstName);
      expect(formInput.prop("invalid")).toBe(false);
    });
    it("should render second name", () => {
      const secondName = "bar";
      const wrapper = getWrapper({ secondName });
      const formInput = wrapper.find(FormInput).at(1);
      expect(formInput.exists()).toBe(true);
      expect(formInput.prop("value")).toBe(secondName);
      expect(formInput.prop("invalid")).toBe(false);
    });
    it("should render town", () => {
      const town = "baz";
      const wrapper = getWrapper({ town });
      const formInput = wrapper.find(FormInput).at(2);
      expect(formInput.exists()).toBe(true);
      expect(formInput.prop("value")).toBe(town);
      expect(formInput.prop("invalid")).toBe(false);
    });
    it("should render phone number", () => {
      const phoneNumber = "bar";
      const wrapper = getWrapper({ phoneNumber });
      const formInput = wrapper.find(FormInput).at(3);
      expect(formInput.exists()).toBe(true);
      expect(formInput.prop("value")).toBe(phoneNumber);
      expect(formInput.prop("invalid")).toBe(false);
    });
    it("should render email", () => {
      const email = "bar";
      const wrapper = getWrapper({ email });
      const formInput = wrapper.find(FormInput).at(4);
      expect(formInput.exists()).toBe(true);
      expect(formInput.prop("value")).toBe(email);
      expect(formInput.prop("invalid")).toBe(false);
    });
  });
  describe("submit button", () => {
    it("renders", () => {
      const wrapper = getWrapper();
      const button = wrapper.find("#submitButton");
      expect(button.exists()).toBe(true);
    });
  });

  describe("validation", () => {
    const e = {
      preventDefault: sinon.spy()
    };

    it("should render error messages for invalid inputs", () => {
      const wrapper = getWrapper();
      const form = wrapper.find("form");
      form.simulate("submit", e);
      const errors = wrapper.state("formErrors");
      expect(errors).toEqual({
        email: "Email is invalid",
        firstName: "First name is too short",
        phoneNumber: null,
        secondName: "Second name is too short",
        town: "Town is too short"
      });
    });
    it("should not render error messages for valid inputs", () => {
      const wrapper = getWrapper({
        firstName: "foo",
        secondName: "bar",
        town: "baz",
        phoneNumber: "12345678901",
        email: "foo@foo.com"
      });
      const form = wrapper.find("form");
      form.simulate("submit", e);
      const errors = wrapper.state("formErrors");
      expect(errors).toEqual({
        email: null,
        firstName: null,
        phoneNumber: null,
        secondName: null,
        town: null
      });
    });
    describe("form input validity driven by errors", () => {
      it("should be true for invalid field value", () => {
        // passing invalid phone number as all other fields are mandatory
        const wrapper = getWrapper({ phoneNumber: "ABC" });
        const form = wrapper.find("form");
        form.simulate("submit", e);
        const numberOfFormInput = wrapper.find(FormInput).length;
        for (var i = 0; i < numberOfFormInput; i++) {
          const formInput = wrapper.find(FormInput).at(i);
          expect(formInput.prop("invalid")).toBe(true);
        }
      });
      it("should be false for valid field value", () => {
        const wrapper = getWrapper({
          firstName: "foo",
          secondName: "bar",
          town: "baz",
          phoneNumber: "12345678901",
          email: "foo@foo.com"
        });
        const form = wrapper.find("form");
        form.simulate("submit", e);
        const numberOfFormInput = wrapper.find(FormInput).length;
        for (var i = 0; i < numberOfFormInput; i++) {
          const formInput = wrapper.find(FormInput).at(i);
          expect(formInput.prop("invalid")).toBe(false);
        }
      });
    });
    it("should render error messages for invalid email", () => {
      const wrapper = getWrapper({
        email: "foofoo.com"
      });
      const form = wrapper.find("form");
      form.simulate("submit", e);
      const errors = wrapper.state("formErrors");
      expect(errors.email).toBe("Email is invalid");
    });
    it("should render error messages for invalid phone number", () => {
      const wrapper = getWrapper({
        phoneNumber: "AB123456789"
      });
      const form = wrapper.find("form");
      form.simulate("submit", e);
      const errors = wrapper.state("formErrors");
      expect(errors.phoneNumber).toBe(
        "Phone number is not a valid number with 11 digits"
      );
    });
    it("should not render error messages for phone number with spaces", () => {
      const wrapper = getWrapper({
        phoneNumber: "0141 123 4567"
      });
      const form = wrapper.find("form");
      form.simulate("submit", e);
      const errors = wrapper.state("formErrors");
      expect(errors.phoneNumber).toEqual(null);
    });
  });
});
