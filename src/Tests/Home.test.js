import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import Home, { HomeLink } from "../Home";

describe("HomeLink Renders", () => {
  const component = renderer.create(
    <Router>
      <HomeLink />
    </Router>
  );

  const wrapper = mount(
    <Router>
      <HomeLink />
    </Router>
  );
  test("HomeLink snap Renders", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the HomeLink", () => {
    expect(wrapper.find("a").length).toEqual(1);
  });
});

describe("Home", () => {
  const component = renderer.create(
    <Router>
      <Home />
    </Router>
  );
  const wrapper = mount(
    <Router>
      <Home />
    </Router>
  );
  expect(wrapper.find("a").length).toEqual(3);
  test("snapshot renders", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
