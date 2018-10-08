import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import DistrictRepository from "./helper.js";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import App from "./App";

describe("App component", () => {
  let wrapper;
  const allDistricts = new DistrictRepository(kinderData);
  const schoolData = allDistricts.stats;
  const districtDirectory = Object.keys(schoolData);

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should add helper dataset to state", () => {
    wrapper.setState({ schoolData });
    expect(wrapper.state().schoolData).toEqual(allDistricts.stats);
  });

  it("should add two clicked cards to comparedCards array in state", () => {
    const initialCompared = [{}, {}];
    expect(wrapper.state().comparedCards).toEqual(initialCompared);

    wrapper.instance().handleCardClick("COLORADO");
    expect(wrapper.state().comparedCards[0].location).toEqual("COLORADO");
    expect(wrapper.state().comparedCards[1]).toEqual({});

    wrapper.instance().handleCardClick("ACADEMY 20");
    expect(wrapper.state().comparedCards[0].location).toEqual("COLORADO");
    expect(wrapper.state().comparedCards[1].location).toEqual("ACADEMY 20");
  });

  it("comparedCards array should not accept more than two cards", () => {
    wrapper.instance().handleCardClick("ASPEN 1");
    wrapper.instance().handleCardClick("AGATE 300");
    wrapper.instance().handleCardClick("CHERAW 31");

    expect(wrapper.state().comparedCards[0].location).toEqual("ASPEN 1");
    expect(wrapper.state().comparedCards[1].location).toEqual("AGATE 300");
    expect(wrapper.state().comparedCards.length).toEqual(2);
  });

  it("should remove card from comparedCards array when clicked", () => {
    wrapper.instance().handleCardClick("DENVER COUNTY 1");
    wrapper.instance().handleCardClick("DURANGO 9-R");

    expect(wrapper.state().comparedCards[0].location).toEqual(
      "DENVER COUNTY 1"
    );
    expect(wrapper.state().comparedCards[1].location).toEqual("DURANGO 9-R");

    wrapper.instance().handleCardClick("DENVER COUNTY 1");
    expect(wrapper.state().comparedCards[0]).toEqual({});
    expect(wrapper.state().comparedCards[1].location).toEqual("DURANGO 9-R");

    wrapper.instance().handleCardClick("DURANGO 9-R");
    expect(wrapper.state().comparedCards).toEqual([{}, {}]);
  });

  it("should toggle user instructions when two cards are being compared", 
    () => {
      const initialInstructions = "click any two districts to compare stats";
      const compareInstructions = "click either card below to remove it";
      expect(wrapper.state().instructions).toEqual(initialInstructions);
      wrapper.instance().handleCardClick("GREELEY 6");
      expect(wrapper.state().instructions).toEqual(initialInstructions);

      wrapper.instance().handleCardClick("HANOVER 28");
      expect(wrapper.state().instructions).toEqual(compareInstructions);

      wrapper.instance().handleCardClick("HANOVER 28");
      expect(wrapper.state().instructions).toEqual(initialInstructions);
    });

  it(`should update 'clicked' property with index in comparedCards array 
      when card is clicked and added to comparedCards`, () => {
    expect(wrapper.state().schoolData["FALCON 49"].clicked).toBeFalsy();
    wrapper.instance().handleCardClick("FALCON 49");
    expect(wrapper.state().schoolData["FALCON 49"].clicked).toEqual(0);

    expect(wrapper.state().schoolData["ELBERT 200"].clicked).toBeFalsy();
    wrapper.instance().handleCardClick("ELBERT 200");
    expect(wrapper.state().schoolData["ELBERT 200"].clicked).toEqual(1);

    expect(wrapper.state().schoolData["ELLICOTT 22"].clicked).toBeFalsy();
    wrapper.instance().handleCardClick("ELLICOTT 22");
    expect(wrapper.state().schoolData["ELLICOTT 22"].clicked).toBeFalsy();

    wrapper.instance().handleCardClick("ELBERT 200");
    expect(wrapper.state().schoolData["ELBERT 200"].clicked).toBeFalsy();

    wrapper.instance().handleCardClick("ELLICOTT 22");
    expect(wrapper.state().schoolData["ELLICOTT 22"].clicked).toEqual(1);
  });

  it("should toggle 'display' property when district appears in search", () => {
    wrapper.instance().handleSearch("yu");
    expect(
      wrapper.state().schoolData["YUMA SCHOOL DISTRICT 1"].display
    ).toBeTruthy();
    expect(wrapper.state().schoolData["COLORADO"].display).toBeFalsy();

    wrapper.instance().handleSearch("col");
    expect(
      wrapper.state().schoolData["YUMA SCHOOL DISTRICT 1"].display
    ).toBeFalsy();
    expect(wrapper.state().schoolData["COLORADO"].display).toBeTruthy();
  });

  it("should prepare compardAvg array when two cards added to comparedCards", 
    () => {
      expect(wrapper.state().comparedAvg).toEqual({});
      wrapper.instance().handleCardClick("YUMA SCHOOL DISTRICT 1");
      wrapper.instance().handleCardClick("ENGLEWOOD 1");

      expect(wrapper.state().comparedAvg).toEqual({
        "YUMA SCHOOL DISTRICT 1": 0.909,
        "ENGLEWOOD 1": 0.885,
        compared: 1.027
      });
    });

  it("displayAllCards function should set all districts do be displayed", 
    () => {
      let results;
      wrapper.instance().handleSearch("yu");

      results = districtDirectory.filter(district => {
        return wrapper.state().schoolData[district].display === true;
      });
      expect(results).toHaveLength(3);

      wrapper.instance().displayAllCards(schoolData, districtDirectory);
      wrapper.setState({ schoolData });

      results = districtDirectory.filter(district => {
        return wrapper.state().schoolData[district].display === true;
      });
      expect(results).toHaveLength(181);
    });

  it("toggleSearchDisplay function should toggle display property", () => {
    const input = "ASDF";

    wrapper.instance().displayAllCards(schoolData, districtDirectory);
    wrapper.setState({ schoolData });
    expect(wrapper.state().schoolData["COLORADO"].display).toBeTruthy();

    wrapper
      .instance()
      .toggleSearchDisplay(schoolData, input, districtDirectory);
    expect(wrapper.state().schoolData["COLORADO"].display).toBeFalsy();
  });

  it(`addClickedProp function should add property 'clicked' of 
      comparedCard array index`, () => {
    let { comparedCards } = wrapper.state();
    const clickedDistrict = wrapper.state().schoolData["COLORADO"];
    const clickedDistrict2 = wrapper.state().schoolData["ENGLEWOOD 1"];

    expect(comparedCards).toEqual([{}, {}]);
    wrapper.instance().addClickedProp(clickedDistrict, comparedCards);
    wrapper.instance().addClickedProp(clickedDistrict2, comparedCards);

    expect(comparedCards[0].location).toEqual("COLORADO");
    expect(comparedCards[0].clicked).toEqual(0);

    expect(comparedCards[1].location).toEqual("ENGLEWOOD 1");
    expect(comparedCards[1].clicked).toEqual(1);
  });

  it(`handleComparedCardClick function should remove card from 
      comparison array`, () => {
    let { comparedCards } = wrapper.state();
    const clickedDistrict = wrapper.state().schoolData["COLORADO"];
    wrapper.instance().handleCardClick("LIMON RE-4J");
    expect(comparedCards[0].location).toEqual("LIMON RE-4J");

    wrapper.instance().handleComparedCardClick(clickedDistrict);
    expect(comparedCards).toEqual([{}, {}]);
  });

  it("resetComparisonCard function should clear comparison card", () => {
    const comparedAvg = { foo: "bar" };
    const instructions = "foo bar";
    wrapper.instance().setState({ comparedAvg, instructions });
    expect(wrapper.state().comparedAvg).toEqual({ foo: "bar" });

    wrapper.instance().resetComparisonCard();
    expect(wrapper.state().comparedAvg).toEqual({});
  });
});
