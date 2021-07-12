import React from "react";
import Chart from "components/Tasks/AdminUIClass/Home/components/Chart";
import GoogleApiWrapper, {
  GoogleMaps,
} from "components/Tasks/AdminUIClass/Home/components/GoogleMap";
import { mount, shallow } from "enzyme";

let wrapped;

describe("Renders the Charts", () => {
  wrapped = shallow(<Chart />);

  test("Snapshot Renders", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("Renders the Google Wrapper??", () => {
  wrapped = mount(<GoogleApiWrapper />);

  test("Snapshot Renders", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

describe("Renders the Google Map??", () => {
  wrapped = mount(<GoogleMaps />);

  test("Snapshot Renders", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
