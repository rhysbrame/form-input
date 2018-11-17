import * as React from "react";
import { mount } from "enzyme";
import Index from "../Index";

describe("Index spec", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
  it("should render without throwing an error", function() {
    const wrap = mount(<Index />);
    expect(wrap.find("p").text()).toBe(
      "Simple React form with validation using Next.js"
    );
  });
});
