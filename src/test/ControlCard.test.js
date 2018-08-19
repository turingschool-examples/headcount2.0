import React from "react";
import { ControlCards } from "../Components/ControlCards";
import { ComparisonCard } from "../Components/ComparisonCard";
import { DistrictCard } from "../Components/DistrictCard";

describe("ControlCards", () => {
  let shallowWrap;
  let mountWrap;
  let mockClick = { "BAYFIELD 10 JT-R": true, "BENNETT 29J": true };
  let mockData = {
    "AGUILAR REORGANIZED 6": {
      location: "AGUILAR REORGANIZED 6",
      stats: {
        2004: 1,
        2005: 1
      },
      cardClick: null
    },
    "AKRON R-1": {
      location: "AKRON R-1",
      stats: {
        2008: 0.844,
        2009: 0.96
      },
      cardClick: null
    },
    comparisonData: {
      "AKRON R-1": 0.619,
      "AGUILAR REORGANIZED 6": 1,
      compared: 0.619
    }
  };

  const mockdDistricts = [
    {
      clicked: true,
      location: "COLORADO",
      stats: {
        2004: 0.24,
        2005: 0.278,
        2006: 0.337,
        2007: 0.395,
        2008: 0.536,
        2009: 0.598,
        2010: 0.64,
        2011: 0.672,
        2012: 0.695,
        2013: 0.703,
        2014: 0.741
      }
    },
    {
      clicked: true,
      location: "ACADEMY 20",
      stats: {
        2004: 0.24,
        2005: 0.278,
        2006: 0.337,
        2007: 0.395,
        2008: 0.536,
        2009: 0.598,
        2010: 0.64,
        2011: 0.672,
        2012: 0.695,
        2013: 0.703,
        2014: 0.741
      }
    }
  ];

  beforeEach(() => {
    shallowWrap = shallow(
      <ControlCards
        comparisonData={mockData}
        cardClick={mockClick}
        selectedDistricts={mockdDistricts}
      />
    );
    mountWrap = mount(
      <ControlCards
        comparisonData={mockData}
        cardClick={mockClick}
        selectedDistricts={mockdDistricts}
      />
    );
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
    expect(mountWrap).toBeDefined();
  });

  it("should match snapshot with no control card", () => {
    shallowWrap = shallow(
      <ControlCards comparisonData={{}} cardClick={mockClick} />
    );

    expect(shallowWrap).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
