import App from "../../src/components/App";
import KinderData from "../../data/kindergartners_in_full_day_program";
import React from "react";
import { DistrictRepository } from "../../src/helpers/DistrictRepository";
import { shallow, render, mount } from "enzyme";

describe("App", () => {
  let wrapper;
  let DCPropsArray;
  let repository;

  beforeEach(() => {
    wrapper = shallow(<App />);
    DCPropsArray = Object.keys(wrapper.find("DistrictContainer").node.props);
    repository = new DistrictRepository(KinderData);
  });

  it("should render one Controls Component", () => {
    expect(wrapper.find("Controls").length).toEqual(1);
  });

  it("should pass a function of findDistrict to Controls as a prop", () => {
    expect(wrapper.find("Controls").get(0).props.findDistrict).toBeInstanceOf(
      Function
    );
  });

  it("should render one DistrictContainer component", () => {
    expect(wrapper.find("DistrictContainer").length).toEqual(1);
  });

  it("should render a div with a class of app-container", () => {
    expect(wrapper.find("div.app-container").length).toEqual(1);
  });

  it("should render 181 DistrictCards", () => {
    wrapper = mount(<App />);

    expect(wrapper.find("DistrictCard").length).toEqual(181);
  });

  it("should have a default state property of cards whose value is an array", () => {
    const componentState = wrapper.state();
    expect(componentState.cards).toBeInstanceOf(Array);
  });

  it("should have a default state property of data whose value is an object", () => {
    const componentState = wrapper.state();
    expect(componentState.data).toBeInstanceOf(Object);
  });

  it("should pass four props to the DistrictContainer", () => {
    expect(DCPropsArray.length).toEqual(4);
  });

  it("should pass a getData prop", () => {
    expect(DCPropsArray.includes("getData"));
  });

  it("should pass a foundData prop", () => {
    expect(DCPropsArray.includes("foundData"));
  });

  it("should pass a fullData prop", () => {
    expect(DCPropsArray.includes("fullData"));
  });
});
