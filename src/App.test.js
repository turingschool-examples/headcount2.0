import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { shallow, mount } from "enzyme";

describe("App", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should render a div element with a class of app-container", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("div.app-container").length).toEqual(1);
  });

  it("should render a DistrictRepository component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("DistrictRepository").length).toEqual(1);
  });
});
