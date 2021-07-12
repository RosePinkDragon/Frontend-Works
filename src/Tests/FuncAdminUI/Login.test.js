import { mount } from "enzyme";
import LoginScreen from "components/Tasks/AdminUI/Login";

describe("log's out onClick", () => {
  let data = false;

  const logger = (change) => {
    data = change;
  };

  let wrapper = mount(<LoginScreen logger={logger} />);

  it("should render the Login Screen Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("changes the logger", () => {
    wrapper.find("form").simulate("submit");
    expect(data).toEqual(true);
  });
});
