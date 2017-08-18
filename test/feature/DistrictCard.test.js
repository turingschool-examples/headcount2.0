import React from "react";
import DistrictCard from "../../src/components/DistrictCard";
import MockData from "../../src/helpers/MockData";
import { shallow, render, mount } from "enzyme";

describe("DistrictCard Component", () => {
  let wrapper;
  let place = "COLORADO";
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <DistrictCard
        location={place}
        data={[]}
        getData={mockFn}
        findDistrict={mockFn}
      />
    );
  });

  it("should render a div with a className of card", () => {
    expect(wrapper.find("div.card").length).toEqual(1);
  });

  it("should render an h3 element", () => {
    expect(wrapper.find("h3").length).toEqual(1);
  });

  it("should render a ul element", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should fire a function on click", () => {
    const card = wrapper.find("div.card");

    expect(mockFn).toHaveBeenCalledTimes(0);
    card.simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
