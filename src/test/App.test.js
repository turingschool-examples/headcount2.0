import React from "react";
import App from "../components/App";
import { shallow } from "enzyme";

describe("App", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<App />);
  });

  it("should match the snapshot", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should have 181 districts in schoolData array", () => {
    expect(shallowWrapper.state().schoolData.length).toEqual(181);
  });

  it("should populate the schoolData state when component mounts", () => {
    expect(shallowWrapper.state().schoolData).not.toEqual({});
  });

  it("should render a DistrictsContainer component", () => {
    expect(shallowWrapper.find("DistrictsContainer").length).toEqual(1);
  });

  it("should update state when a district is searched", () => {});

  it("should add object to clickedCard array when clicked", () => {});

  it("should add 2nd object to clickedCard array when clicked", () => {});
});
