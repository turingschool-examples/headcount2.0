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

  beforeEach(() => {
    shallowWrap = shallow(
      <ControlCards comparisonData={mockData} cardClick={mockClick} />
    );
    mountWrap = mount(
      <ControlCards comparisonData={mockData} cardClick={mockClick} />
    );
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
    expect(mountWrap).toBeDefined();
  });

  it("should instantiate DistrictCard and ComparisonCard Component", () => {
    expect(shallowWrap.find(DistrictCard).length).toEqual(2);
    expect(shallowWrap.find(ComparisonCard).length).toEqual(1);
  });

  it("should pass down data to child components", () => {
    expect(
      mountWrap
        .find(DistrictCard)
        .first()
        .props()
    ).toEqual({
      cardClick: { "BAYFIELD 10 JT-R": true, "BENNETT 29J": true },
      location: "AGUILAR REORGANIZED 6",
      stats: { "2004": 1, "2005": 1 }
    });

    expect(
      mountWrap
        .find(ComparisonCard)
        .first()
        .props()
    ).toEqual({
      comparisonData: {
        "AGUILAR REORGANIZED 6": 1,
        "AKRON R-1": 0.619,
        compared: 0.619
      }
    });
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
