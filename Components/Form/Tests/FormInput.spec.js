import React from "react";
import { shallow } from "enzyme";
import FormInput from "../FormInput";
import sinon from "sinon";

describe("FormInput spec", () => {
  const getWrapper = props => shallow(<FormInput {...props} />);

  it("should render the input with a label", () => {
    const label = "Foo";
    const wrapper = getWrapper({ label });
    expect(wrapper.text()).toBe("Foo");
  });
  it("should call onInputChange when the value changes", () => {
    const onInputChange = sinon.spy();
    const wrapper = getWrapper({ onInputChange });
    const component = wrapper.find("#input");
    const event = {
      target: {
        value: "123"
      }
    };
    component.simulate("change", event);
    expect(onInputChange.calledWith("123")).toBe(true);
  });
  it("should render an input component", () => {
    const value = "foo";
    const wrapper = getWrapper({ value });
    const component = wrapper.find("#input");
    expect(component).toHaveLength(1);
    expect(component.prop("className")).toBe("form-control ");
    expect(component.prop("value")).toBe(value);
  });
  it("should render input component with invalid class", () => {
    const wrapper = getWrapper({ invalid: true });
    const component = wrapper.find("#input");
    expect(component).toHaveLength(1);
    expect(component.prop("className")).toBe("form-control is-invalid");
  });
});
