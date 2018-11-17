import * as React from "react";
import { mount } from "enzyme";
import TextInput from "../Components/TextInput";

describe("TextInput spec", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
  it("should render without throwing an error", function() {
    const wrapper = mount(<TextInput />);
    expect(wrapper.hasClass("TextInput"));
  });
});
