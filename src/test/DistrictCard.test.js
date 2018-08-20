import React from "react";
import DistrictCard from "../components/DistrictCard";
import { shallow } from "enzyme";

describe("DistrictCard", () => {
  let mockData = { 2004: 0, 2005: 0, 2006: 0, 2007: 1 };
  let wrapper;

  it("should match the snapshot", () => {
    wrapper = shallow(<DistrictCard location="COLORADO" stats={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render each data point as an article", () => {
    wrapper = shallow(<DistrictCard location="COLORADO" stats={mockData} />);

    expect(wrapper.find("article").length).toEqual(4);
  });

  it("should call selectCards on click", () => {
    const mockFn = jest.fn();

    wrapper = shallow(
      <DistrictCard selectCards={mockFn} location="COLORADO" stats={mockData} />
    );
    wrapper
      .find("article")
      .first()
      .simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
