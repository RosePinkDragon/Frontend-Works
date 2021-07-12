import ProductCards from "components/Tasks/AdminUIClass/Home/components/ProductCards";
import { productData } from "utils/HomeData";

import { mount } from "enzyme";

describe("ProductCards", () => {
  const wrapper = mount(<ProductCards />);
  it("renders product cards", () => {
    expect(wrapper.find(".card").length).toEqual(productData.length);
    expect(wrapper.find(".cardWrap").length).toEqual(1);
  });
  it("should render the Products Card Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
