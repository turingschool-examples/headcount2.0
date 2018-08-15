import React from "react";
import App from "../Components/App";

describe("App", () => {
  let shallowWrap;
  beforeEach(() => {
    shallowWrap = shallow(<App />);
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
  });

  it("should have default state properties of districts to be the kindergarden data", () => {
    expect(shallowWrap.state().selectedDistricts).toEqual([]);
    expect(shallowWrap.state().comparisonData).toEqual({});
    expect(shallowWrap.state().cardClick).toEqual({});
  });

  it("should set state property of districts to be equal to the kindergarden data on componentDidmount", () => {
    expect(shallowWrap.state().districts.length).toEqual(181);
  });

  it("should handle change state of districts", () => {
    shallowWrap.setState({ districts: [] });
    expect(shallowWrap.state().districts).toEqual([]);

    shallowWrap.instance().handleSubmit("Colorado");
    expect(shallowWrap.state().districts).toEqual("Colorado");
  });

  it("should change state of cardClick to an object with location as key and true as the value if location is not a key in the cardclick object", () => {
    expect(shallowWrap.state().cardClick).toEqual({});

    shallowWrap.instance().selectCard("Colorado");

    expect(shallowWrap.state().cardClick).toEqual({ Colorado: true });
  });

  it("should remove key value if the location is a key in cardClick and setState cardClick", () => {
    const locationObj = { Colorado: true, "ACADEMY 20": true };
    shallowWrap.setState({ cardClick: locationObj });

    shallowWrap.instance().selectCard("Colorado");

    expect(shallowWrap.state().cardClick).toEqual({ "ACADEMY 20": true });
  });

  it("should add locations to the state of selectedDistricts if its length is less than 3", () => {
    expect(shallowWrap.state().selectedDistricts.length).toEqual(0);

    shallowWrap.instance().selectCard("Colorado");
    expect(shallowWrap.state().selectedDistricts.length).toEqual(1);

    shallowWrap.instance().selectCard("ACADEMY 20");
    expect(shallowWrap.state().selectedDistricts.length).toEqual(2);

    shallowWrap.instance().selectCard("AKRON 10");
    expect(shallowWrap.state().selectedDistricts.length).toEqual(2);
  });

  it("should compare Districts and set state of comparison data to an object with values of comparing score avgs", () => {
    expect(shallowWrap.state().comparisonData).toEqual({});

    shallowWrap.instance().compareDistricts("Colorado", "ACADEMY 20");

    const result = {
      "ACADEMY 20": {
        cardClick: null,
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
      COLORADO: 0.53,
      Colorado: {
        cardClick: null,
        location: "COLORADO",
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
      },
      comparisonData: {
        "ACADEMY 20": 0.407,
        Colorado: undefined,
        compared: 1.302
      }
    };

    expect(shallowWrap.state().comparisonData).toEqual(result);
  });

  it.skip("should render a search Component, ControlCards, and districtCardContainer", () => {
    shallowWrap.setState({
      comparisonData: { yes: "no" },
      districts: [1, 2, 3]
    });
    shallowWrap.update();
    console.log(shallowWrap.props().children.map(child => console.log(child)));

    expect(shallowWrap.find("Search").length).toEqual(1);
    expect(shallowWrap.find("ControlCards").length).toEqual(1);
    expect(shallowWrap.find("DistrictCardContainer").length).toEqual(1);
  });
  it("should match snap shot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
