import React from "react";
import { DistrictCard } from "../Components/DistrictCard";

describe("DistrictCard", () => {
  let shallowWrap;
  let mountWrap;
  let mockLocation = {
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

  it("should render one h1 element and eleven sections", () => {
    expect(shallowWrap.children().length).toEqual(12);
    expect(shallowWrap.find("section").length).toEqual(11);
    expect(shallowWrap.find("h1").length).toEqual(1);
  });

  it("should render unique keys for each section", () => {
    const result = [
      { key: "0" },
      { key: "1" },
      { key: "2" },
      { key: "3" },
      { key: "4" },
      { key: "5" },
      { key: "6" },
      { key: "7" },
      { key: "8" },
      { key: "9" },
      { key: "10" }
    ];

    expect(
      shallowWrap
        .props()
        .children.map(child => child)[1]
        .map(child => {
          return { key: child.key };
        })
    ).toEqual(result);
  });

  it("should handle click of individual card", () => {
    let mockfn = jest.fn();
    let mockWrap = shallow(
      <DistrictCard
        location={mockLocation.location}
        stats={mockLocation.stats}
        selectCard={() => mockfn()}
      />
    );
    let sectionOne = mockWrap.find("section").first();
    sectionOne.simulate("click");

    expect(mockfn).toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
