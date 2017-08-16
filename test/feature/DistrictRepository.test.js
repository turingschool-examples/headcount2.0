import DistrictRepository from "../../src/components/DistrictRepository";
import Controls from "../../src/components/Controls";
import { DistrictContainer } from "../../src/components/DistrictContainer";
import KinderData from "../../data/kindergartners_in_full_day_program";
import React from "react";
import { shallow, render } from "enzyme";

describe("District Repository", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DistrictRepository />);
  });

  it("should render one Controls Component", () => {
    expect(wrapper.find("Controls").length).toEqual(1);
  });

  // it("should render one DistrictContainer component", () => {
  //   expect(wrapper.find("DistrictContainer").length).toEqual(1);
  // });

  it("should render a div with a class of district-repository-container", () => {
    expect(wrapper.find("div.district-repository-container").length).toEqual(1);
  });

  it("should have a default state property of cards whose value is an array", () => {
    const componentState = wrapper.state();
    expect(componentState.cards).toBeInstanceOf(Array);
  });

  it("should have a default state property of data whose value is an object", () => {
    const componentState = wrapper.state();
    expect(componentState.cards).toBeInstanceOf(Object);
  });
});
