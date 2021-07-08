import ProductCards from "components/Tasks/AdminUIClass/Home/components/ProductCards";
import { productData } from "utils/HomeData";

import { mount } from "enzyme";

describe("ProductCards", () => {
  it("renders product cards", () => {
    const wrapper = mount(<ProductCards />);
    expect(wrapper.find(".card").length).toEqual(productData.length);
    expect(wrapper.find(".cardWrap").length).toEqual(1);
  });
});
