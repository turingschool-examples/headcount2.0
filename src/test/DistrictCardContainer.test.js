import React from "react";
import { DistrictCardContainer } from "../Components/DistrictCardContainer";

describe("DistrictCardContainer", () => {
  let shallowWrap;
  let mockDistricts = [
    {
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
      location: "ACADEMY 20",
      stats: {
        2004: 0.302,
        2005: 0.267,
        2006: 0.354,
        2007: 0.392,
        2008: 0.385,
        2009: 0.39,
        2010: 0.436,
        2011: 0.489,
        2012: 0.479,
        2013: 0.488,
        2014: 0.49
      }
    }
  ];

  beforeEach(() => {
    shallowWrap = shallow(
      <DistrictCardContainer districts={mockDistricts} selectCard={jest.fn()} />
    );
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
  });

  it("should match snap shot with an empty District Card container", () => {
    shallowWrap = shallow(
      <DistrictCardContainer districts={[]} selectCard={jest.fn()} />
    );
    expect(shallowWrap).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
