import React from "react";
import { DistrictCard } from "../Components/DistrictCard";

describe("DistrictCard", () => {
  let shallowWrap;
  let mockLocation = {
    clicked: true,
    location: "Colorado",
    stats: {
      "2004": 0.24,
      "2005": 0.278,
      "2006": 0.337,
      "2007": 0.395,
      "2008": 0.536,
      "2009": 0.598,
      "2010": 0.64,
      "2011": 0.672,
      "2012": 0.695,
      "2013": 0.703,
      "2014": 0.741
    }
  };

  beforeEach(() => {
    shallowWrap = shallow(
      <DistrictCard
        location={mockLocation.location}
        stats={mockLocation.stats}
        selectCard={jest.fn()}
      />
    );
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
  });

  it("should handle click of individual card", () => {
    let mockfn = jest.fn();
    let mockWrap = shallow(
      <DistrictCard
        location={mockLocation.location}
        stats={mockLocation.stats}
        selectCard={mockfn}
        index={1}
      />
    );
    let sectionOne = mockWrap.find("div").first();

    sectionOne.simulate("click");

    expect(mockfn).toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    shallowWrap = shallow(
      <DistrictCard location={""} stats={{}} selectCard={jest.fn()} />
    );
    expect(shallowWrap).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
