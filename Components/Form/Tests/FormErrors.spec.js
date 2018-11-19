import * as React from "react";
import { shallow } from "enzyme";
import { FormErrors } from "../FormErrors";

describe.only("FormErrors spec", () => {
  it("should render a message for each error passed to it", () => {
    const formErrors = {
      firstName: "foo",
      secondName: null,
      town: null,
      phoneNumber: null,
      email: null
    };
    const wrapper = shallow(<FormErrors formErrors={formErrors} />);
    expect(wrapper.text()).toBe("foo");
  });
});
