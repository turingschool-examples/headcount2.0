import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, mount } from "enzyme";

describe("App", () => {
  let shallowWrapper;
  let mountWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<App />);
    mountWrapper = mount(<App />);
  });

  it("should populate the schoolData state when component mounts", () => {
    expect(shallowWrapper.state().schoolData).not.toEqual({});
  });

  it("should render a DistrictContainer component", () => {});
});
