import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Card from "./Card";
import ComparedCard from "./ComparedCard";
import CompareCardContainer from "./CompareCardContainer";
import DistrictRepository from "./helper.js";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import App from "./App";

describe("App component", () => {
  let wrapper;
  let handleMockCardClick;
  const district = new DistrictRepository(kinderData);
  const allDistricts = district.stats;

  beforeEach(() => {
    handleMockCardClick = jest.fn();
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
    wrapper.setState({ schoolData: allDistricts });
    expect(wrapper.state().schoolData).toEqual(district.stats);
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

  it("should toggle user instructions when two cards are being compared", () => {
    const initialInstructions = "click any two districts to compare stats";
    const compareInstructions = "click either card below to remove it";
    expect(wrapper.state().instructions).toEqual(initialInstructions);

    wrapper.instance().handleCardClick("DENVER COUNTY 1");
    expect(wrapper.state().instructions).toEqual(initialInstructions);

    wrapper.instance().handleCardClick("DURANGO 9-R");
    expect(wrapper.state().instructions).toEqual(compareInstructions);

    wrapper.instance().handleCardClick("DURANGO 9-R");
    expect(wrapper.state().instructions).toEqual(initialInstructions);
  });

  it("should update 'clicked' and property with index in comparedCards array when card is clicked and added to comparedCards", () => {
    expect(wrapper.state().schoolData["FALCON 49"].clicked).toEqual(false);
    wrapper.instance().handleCardClick("FALCON 49");
    expect(wrapper.state().schoolData["FALCON 49"].clicked).toEqual(0);

    expect(wrapper.state().schoolData["ELBERT 200"].clicked).toEqual(false);
    wrapper.instance().handleCardClick("ELBERT 200");
    expect(wrapper.state().schoolData["ELBERT 200"].clicked).toEqual(1);

    expect(wrapper.state().schoolData["ELLICOTT 22"].clicked).toEqual(false);
    wrapper.instance().handleCardClick("ELLICOTT 22");
    expect(wrapper.state().schoolData["ELLICOTT 22"].clicked).toEqual(false);

    wrapper.instance().handleCardClick("ELBERT 200");
    expect(wrapper.state().schoolData["ELBERT 200"].clicked).toEqual(false);

    wrapper.instance().handleCardClick("ELLICOTT 22");
    expect(wrapper.state().schoolData["ELLICOTT 22"].clicked).toEqual(1);
  });

  it("should toggle 'display' property when district appears in search", () => {
    wrapper.instance().handleSearch("yu");
    expect(
      wrapper.state().schoolData["YUMA SCHOOL DISTRICT 1"].display
    ).toEqual(true);
    expect(wrapper.state().schoolData["COLORADO"].display).toEqual(false);

    wrapper.instance().handleSearch("col");
    expect(
      wrapper.state().schoolData["YUMA SCHOOL DISTRICT 1"].display
    ).toEqual(false);
    expect(wrapper.state().schoolData["COLORADO"].display).toEqual(true);
  });

  it("should prepare compardAvg array when two cards added to comparedCards", () => {
    expect(wrapper.state().comparedAvg).toEqual({});
    wrapper.instance().handleCardClick("YUMA SCHOOL DISTRICT 1");
    wrapper.instance().handleCardClick("ENGLEWOOD 1");

    expect(wrapper.state().comparedAvg).toEqual({
      "YUMA SCHOOL DISTRICT 1": 0.909,
      "ENGLEWOOD 1": 0.885,
      compared: 1.027
    });
  });
});
