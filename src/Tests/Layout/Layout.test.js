import React from "react";
import Layout from "components/Tasks/AdminUI/Layout";
// import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

const layoutChildren = "Test Children";

let wrapper;

describe("Renders the Layout with Children", () => {
  wrapper = shallow(<Layout>{layoutChildren}</Layout>);
  test("Snapshot Renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
  expect(wrapper.find(".bodyWrap").text()).toEqual(layoutChildren);
});

describe("updates state onClick", () => {
  let wrapper = mount(<Layout>{layoutChildren}</Layout>);
  wrapper.find(".burger-btn").simulate("click");
  expect(wrapper.find(".active").length).toEqual(2);
});

describe("log's out onClick", () => {
  let data = true;

  const logger = (change) => {
    data = change;
  };

  let wrapper = mount(<Layout logger={logger}>{layoutChildren}</Layout>);
  wrapper.find(".btn.logOut").simulate("click");
  expect(data).toEqual(false);
});
