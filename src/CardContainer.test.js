import React from "react";
import CardContainer from "./CardContainer";
import Card from "./Card";
import { shallow } from "enzyme";

describe("IdeaContainer", () => {
  let wrapper;
  let mockData;
  let handleMockCardClick;

  beforeEach(() => {
    handleMockCardClick = jest.fn();
    mockData = {
      COLORADO: {
        location: "Colorado",
        stats: { 2004: 0.24 },
        display: true,
        clicked: false
      },
      "ACADEMY 20": {
        location: "ACADEMY 20",
        stats: { 2004: 0.74 },
        display: true,
        clicked: false
      }
    };
    wrapper = shallow(
      <CardContainer 
        cards={mockData} 
        handleCardClick={handleMockCardClick} />
    );
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders all cards", () => {
    expect(wrapper.find(Card).length).toEqual(2);
  });
});
