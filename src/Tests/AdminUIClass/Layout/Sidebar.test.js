import { mount } from "enzyme";
import SidebarSubMenu from "components/Tasks/AdminUIClass/Layout/SidebarSubMenu";

// const title = "Test Title";
const data = {
  name: "Admin Menu",
  options: ["All Admins", "This Admin", "None"],
};

let wrapped = mount(<SidebarSubMenu data={data} />);
describe("SidebarSubMenu Render", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("updates state onClick", () => {
  let wrapper = mount(<SidebarSubMenu data={data} />);

  it("should not render subData menu", () => {
    expect(wrapper.find(".subData").length).toEqual(0);
  });

  it("should render subData menu", () => {
    wrapper.find("p").simulate("click");
    expect(wrapper.find(".subData").length).toEqual(1);
    expect(wrapper.find(".subData").find("p").length).toEqual(
      data.options.length
    );
  });

  it("should remove subData menu", () => {
    wrapper.find("p").at(1).simulate("click");
    expect(wrapper.find(".subData").length).toEqual(0);
    expect(wrapper.find(".subData").find("p").length).toEqual(0);
  });
});
