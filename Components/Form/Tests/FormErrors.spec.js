import * as React from "react";
import { shallow } from "enzyme";
import { FormErrors } from "../FormErrors";

describe("FormErrors spec", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<FormErrors formErrors />);
    expect(wrapper.hasClass("FormErrors"));
  });
});
