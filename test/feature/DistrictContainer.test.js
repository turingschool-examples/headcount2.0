import DistrictContainer from "../../src/components/DistrictContainer";
import React from "react";
import DistrictCard from "../../src/components/DistrictCard";
import MockData from "../../src/helpers/MockData";
import { shallow, render, mount } from "enzyme";

describe("DistrictContainer Component", () => {
  let wrapper;
  let mockFn = jest.fn();
  let mockFn2 = jest.fn();
  let foundDataStub = ["COLORADO", "FARTVILLE", "ARAPAHOE"];
  let DCardPropsArray;

  beforeEach(() => {
    wrapper = shallow(
      <DistrictContainer
        getData={mockFn}
        foundData={foundDataStub}
        fullData={MockData}
        findDistrict={mockFn2}
      />
    );
    DCardPropsArray = Object.keys(
      wrapper.find("DistrictCard").first().node.props
    );
  });

  it("should render a div with a className of district-container", () => {
    expect(wrapper.find("div.district-container").length).toEqual(1);
  });

  it("should render one DistrictCard component for every element in the foundData prop", () => {
    expect(wrapper.find("DistrictCard").length).toEqual(foundDataStub.length);
  });

  it("should receive 4 props from App component", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys.length).toEqual(4);
  });

  it("should receive a getData prop ", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[0]).toEqual("getData");
  });

  it("should receive a foundData prop", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[1]).toEqual("foundData");
  });

  it("should receive a fullData prop", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[2]).toEqual("fullData");
  });

  it("should receive a findDistrict prop", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[3]).toEqual("findDistrict");
  });

  it("should pass four props to each DistrictCard component", () => {
    expect(DCardPropsArray.length).toEqual(4);
  });

  it("should pass a location prop to each DistrictCard component", () => {
    expect(DCardPropsArray[0]).toEqual("location");
  });

  it("should pass a data prop to each DistrictCard component", () => {
    expect(DCardPropsArray[1]).toEqual("data");
  });

  it("should pass a getData prop to each DistrictCard component", () => {
    expect(DCardPropsArray[2]).toEqual("getData");
  });

  it("should pass a findDistrict prop to each DistrictCard component", () => {
    expect(DCardPropsArray[3]).toEqual("findDistrict");
  });
});
