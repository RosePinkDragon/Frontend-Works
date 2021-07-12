import React from "react";
import AdminUI from "components/Tasks/AdminUI/";
// import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { productData } from "utils/HomeData";
import ProductCards from "components/Tasks/AdminUI/Home/components/ProductCards";

let wrapped = shallow(<AdminUI />);

describe("Renders the Layout with Children", () => {
  test("Snapshot Renders", () => {
    expect(wrapped).toMatchSnapshot();
  });

  // let wrapper = renderer.create(<Layout>{layoutChildren}</Layout>);
  //   const childWrapper = wrapper.find(".bodyWrap");
  // expect(wrapped.find(ProductCards)).to.have.lengthOf(1);
  test("Snapshot Renders Products Cards", () => {
    expect(wrapped.find(ProductCards).dive().find(".card").length).toEqual(
      productData.length
    );
  });
});
