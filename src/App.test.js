import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<App />);
  });

  it("should match the snapshot", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should have 181 districts in schoolData.stats object", () => {
    expect(Object.keys(shallowWrapper.state().schoolData.stats).length).toEqual(
      181
    );
  });

  it("should populate the schoolData state when component mounts", () => {
    expect(shallowWrapper.state().schoolData).not.toEqual({});
  });

  it("should render a DistrictsContainer component", () => {
    expect(shallowWrapper.find("DistrictsContainer").length).toEqual(1);
  });
});
