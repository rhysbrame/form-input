import * as React from "react";
import { mount } from "enzyme";
import FormInput from "../FormInput";

describe.only("FormInput spec", () => {
  it("should render without throwing an error", () => {
    const wrapper = mount(<FormInput label="foo" />);
    console.log("****", wrapper.debug());
    const label = wrapper.find(".label");
    // const children = label.prop("children");
    // expect(label.innerT).toBe("foo");
  });
});
