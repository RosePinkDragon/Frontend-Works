import React from "react";
import AdminUI from "components/Tasks/AdminUI/";
// import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { productData } from "components/Tasks/AdminUI/Home/data.js";

let wrapped = shallow(<AdminUI />);

describe("Renders the Layout with Children", () => {
  test("Snapshot Renders", () => {
    expect(wrapped).toMatchSnapshot();
  });

  it("should render the login screen", () => {
    wrapped.setState({ isLogged: false });
    expect(wrapped).toMatchSnapshot();
  });

  // let wrapper = renderer.create(<Layout>{layoutChildren}</Layout>);
  //   const childWrapper = wrapper.find(".bodyWrap");
  expect(wrapped.find(".card").length).toEqual(productData.length);
});
