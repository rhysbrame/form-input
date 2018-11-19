import React from "react";
import { shallow } from "enzyme";
import { FormErrors } from "../FormErrors";

describe("FormErrors spec", () => {
  it("should render a message for each error passed to it", () => {
    const formErrors = {
      firstName: "foo",
      secondName: "bar",
      town: null,
      phoneNumber: null,
      email: null
    };
    const wrapper = shallow(<FormErrors formErrors={formErrors} />);
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toBe("foo");
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toBe("bar");
  });
});
