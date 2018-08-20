import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import { shallow } from "enzyme";
import DistrictsContainer from "../components/DistrictsContainer";

describe("App", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<App />);
  });

  it("should have 181 districts in districts array", () => {
    expect(shallowWrapper.state().districts.length).toEqual(181);
  });

  it("should populate the districts state when component mounts", () => {
    expect(shallowWrapper.state().districts).not.toEqual({});
  });

  it("should render a DistrictsContainer component", () => {
    expect(shallowWrapper.find("DistrictsContainer").length).toEqual(1);
  });

  it("should render a SearchForm Component", () => {
    expect(shallowWrapper.find(DistrictsContainer).length).toEqual(1);
  });

  it("should filter the districts array when findCards is invoked", () => {
    shallowWrapper.instance().findDistricts("co");
    expect(shallowWrapper.state().districts.length).toBeLessThan(181);
  });

  it("should add object to selectedCards when selectCards is invoked", () => {
    const selectedCard = {
      location: "COLORADO",
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };

    shallowWrapper.instance().selectCards(selectedCard.location);
    expect(shallowWrapper.state().selectedCards.length).toBeGreaterThan(0);
  });

  it("should change selected prop to true when added to selectedCards", () => {
    const selectedCard = {
      location: "COLORADO",
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };
    shallowWrapper.instance().selectCards(selectedCard.location);
    expect(shallowWrapper.state().selectedCards[0].selected).toEqual(true);
  });

  it("should remove obj from selectedCards when selectCards is invoked", () => {
    const selectedCard = {
      location: "COLORADO",
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };

    shallowWrapper.instance().selectCards(selectedCard.location);
    expect(shallowWrapper.state().selectedCards.length).toBeGreaterThan(0);
    shallowWrapper.instance().selectCards(selectedCard.location);
    expect(shallowWrapper.state().selectedCards.length).toEqual(0);
  });

  it("should change selected prop on selected card to false when removed from selectedCards", () => {
    const selectedCard = {
      location: "COLORADO",
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };

    shallowWrapper.instance().selectCards(selectedCard.location);
    expect(shallowWrapper.state().selectedCards[0].selected).toEqual(true);
    shallowWrapper.instance().selectCards(selectedCard.location);
    const foundDistrict = shallowWrapper
      .state()
      .districts.find(district => district.location === selectedCard.location);
    expect(foundDistrict.selected).toEqual(false);
  });

  it("should not add another selected card if 2 already exist", () => {
    const selectedCard = {
      location: "COLORADO",
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };

    const selectedCard2 = {
      location: "ACADEMY 20",
      stats: {
        2004: 0.64,
        2005: 0.672
      },
      selected: false
    };

    const selectedCard3 = {
      location: "AGATE 300",
      stats: {
        2004: 0.546,
        2005: 0.872
      },
      selected: false
    };

    shallowWrapper.instance().selectCards(selectedCard.location);
    shallowWrapper.instance().selectCards(selectedCard2.location);
    shallowWrapper.instance().selectCards(selectedCard3.location);
    expect(shallowWrapper.state().selectedCards.length).toEqual(2);
  });
});
