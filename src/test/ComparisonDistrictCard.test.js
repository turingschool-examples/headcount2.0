import React from "react";
import { ComparedDistrictCard } from "../Components/ComparedDistrictCard";

describe("ComparedDistrictCard", () => {
  let shallowWrap;
  let mockStats = {
    2004: 0.228,
    2005: 0.3,
    2006: 0.293,
    2007: 0.306,
    2008: 0.673,
    2009: 1,
    2010: 1,
    2011: 1,
    2012: 1,
    2013: 0.998,
    2014: 1
  };
  beforeEach(() => {
    shallowWrap = shallow(
      <ComparedDistrictCard
        location={"ACADEMY 20"}
        stats={mockStats}
        index={1}
      />
    );
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
  });

  it("should match snapshot", () => {
    shallowWrap = shallow(
      <ComparedDistrictCard location={""} stats={{}} index={null} />
    );
    expect(shallowWrap).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
