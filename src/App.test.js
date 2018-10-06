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
});
