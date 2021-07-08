import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import Home, { HomeLink } from "../Home";

// const list = ['a', 'b', 'c'];

describe("App", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <Router>
        <Home />
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   it("renders the inner Counter", () => {
  //     const wrapper = mount(<Home />);
  //     expect(wrapper.find("p").text()).toEqual(0);
  //   });
});
