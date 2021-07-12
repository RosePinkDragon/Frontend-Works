import ProductCards from "components/Tasks/AdminUI/Home/components/ProductCards";
import { productData } from "utils/HomeData";

import { mount } from "enzyme";

describe("ProductCards", () => {
  const wrapper = mount(<ProductCards />);
  it("renders product cards", () => {
    expect(wrapper.find(".card").length).toEqual(productData.length);
    expect(wrapper.find(".cardWrap").length).toEqual(1);
  });

  it("should render the Products Card inner Component's correctly", () => {
    wrapper.find(".card").forEach((card, idx) => {
      expect(card.find("h3").text()).toEqual(productData[idx].name);
      expect(card.find("h5").text()).toEqual(
        `${productData[idx].products.length}`
      );
    });
  });

  it("should render the Products Card Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
