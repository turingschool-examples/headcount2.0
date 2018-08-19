import React from "react";
import App from "../Components/App";

describe("App", () => {
  let shallowWrap;
  const mockState = [
    {
      location: "ACADEMY 20",
      stats: {
        "2004": 0.302,
        "2005": 0.267,
        "2006": 0.354,
        "2007": 0.392,
        "2008": 0.385,
        "2009": 0.39,
        "2010": 0.436,
        "2011": 0.489,
        "2012": 0.479,
        "2013": 0.488,
        "2014": 0.49
      },
      clicked: true
    },
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
    }
  ];

  beforeEach(() => {
    shallowWrap = shallow(<App />);
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
  });

  it("should have default state properties of districts to be the kindergarden data", () => {
    expect(shallowWrap.state().selectedDistricts).toEqual([]);
    expect(shallowWrap.state().comparisonData).toEqual({});
  });

  it("should set state property of districts to be equal to the kindergarden data on componentDidmount", () => {
    expect(shallowWrap.state().districts.length).toEqual(181);
  });

  it("should handle change state of districts", () => {
    shallowWrap.setState({ districts: mockState });
    expect(shallowWrap.state().districts).toEqual(mockState);

    shallowWrap.instance().handleSubmit(mockState);
    expect(shallowWrap.state().districts).toEqual(mockState);
  });

  it("should change property of cardClick of object with location as key and true as the value if location is not a key in the cardclick object", () => {
    shallowWrap.instance().selectCard("ACADEMY 20");
    shallowWrap.instance().selectCard("COLORADO");

    expect(shallowWrap.state().selectedDistricts).toEqual(mockState);
  });

  it("should remove key value if the location is a key in cardClick and setState cardClick", () => {
    const locationObj = { "APSEN 1": true, "ACADEMY 20": false };
    shallowWrap.setState({ cardClick: locationObj });
    shallowWrap.instance().selectCard("ACADEMY 20");
    expect(shallowWrap.state().cardClick).toEqual({
      "APSEN 1": true,
      "ACADEMY 20": false
    });
  });

  it("should clear state comparisonData when invoked", () => {
    shallowWrap.instance().compareDistricts("ACADEMY 20", "COLORADO");
    shallowWrap.instance().clearComparisons();
    expect(shallowWrap.state().comparisonData).toEqual({});
  });

  it("should add locations to the state of selectedDistricts if its length is less than 3", () => {
    expect(shallowWrap.state().selectedDistricts.length).toEqual(0);
    shallowWrap.instance().selectCard("ASPEN 1");
    expect(shallowWrap.state().selectedDistricts.length).toEqual(1);
    shallowWrap.instance().selectCard("ACADEMY 20");
    expect(shallowWrap.state().selectedDistricts.length).toEqual(2);
    shallowWrap.instance().selectCard("ADAMS COUNTY 14");
    expect(shallowWrap.state().selectedDistricts.length).toEqual(2);
    shallowWrap.instance().selectCard("ACADEMY 20");
    expect(shallowWrap.state().selectedDistricts.length).toEqual(1);
  });

  it("should compare Districts and set state of comparison data to an object with values of comparing score avgs", () => {
    expect(shallowWrap.state().comparisonData).toEqual({});

    shallowWrap.instance().compareDistricts("AGATE 300", "ACADEMY 20");

    const result = {
      "ACADEMY 20": {
        clicked: false,
        location: "ACADEMY 20",
        stats: {
          "2004": 0.302,
          "2005": 0.267,
          "2006": 0.354,
          "2007": 0.392,
          "2008": 0.385,
          "2009": 0.39,
          "2010": 0.436,
          "2011": 0.489,
          "2012": 0.479,
          "2013": 0.488,
          "2014": 0.49
        }
      },
      "AGATE 300": {
        clicked: false,
        location: "AGATE 300",
        stats: {
          "2004": 1,
          "2005": 1,
          "2006": 0,
          "2007": 1,
          "2008": 1,
          "2009": 1,
          "2010": 1,
          "2011": 1,
          "2012": 1,
          "2013": 1,
          "2014": 1
        }
      },
      comparisonData: {
        "ACADEMY 20": 0.407,
        "AGATE 300": 0.909,
        compared: 0.448
      }
    };
    expect(shallowWrap.state().comparisonData).toEqual(result);
  });

  it("should match snap shot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
