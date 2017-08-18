import App from "../../src/components/App";
import Controls from "../../src/components/Controls";
import KinderData from "../../data/kindergartners_in_full_day_program";
import React from "react";
import { DistrictRepository } from "../../src/helpers/DistrictRepository";
import { shallow, render, mount } from "enzyme";

describe("Controls", () => {
  let wrapper;
  const mockFn = jest.fn();
  const mockData = [
    {
      Data: 0.395,
      DataFormat: "Percent",
      Location: "COLORADO",
      TimeFrame: 2007
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Controls
        findDistrict={mockFn}
        handleChange={mockFn}
        DistrictRepository={mockData}
      />
    );
  });

  it("should render a div with a className of controls-container", () => {
    expect(wrapper.find("div.controls-container").length).toEqual(1);
  });

  it("should render an input with a className of search-input", () => {
    expect(wrapper.find("input.search-input").length).toEqual(1);
  });

  it("should render a button with a className of search-button", () => {
    expect(wrapper.find("button.search-button").length).toEqual(1);
  });

  it("should be passed three props from App", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys.length).toEqual(3);
  });

  it("should fire function on change", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "abc" } });

    expect(mockFn).toHaveBeenCalled();
  });

  it("should fire function on button click", () => {
    const button = wrapper.find("button");
    button.simulate("click");

    expect(mockFn).toHaveBeenCalled();
  });

  it("should be passed a DistrictRepository prop that holds data", () => {
    expect(wrapper.unrendered.props.DistrictRepository).toEqual(mockData);
  });
});
