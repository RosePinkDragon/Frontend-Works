import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Home, { HomeLink } from "../Home";

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
  test("HomeLink snapshot renders", () => {
    const component = renderer.create(
      <Router>
        <HomeLink />
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
