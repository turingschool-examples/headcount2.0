import React from "react";
import ComparedCard from "./ComparedCard";
import { shallow } from "enzyme";

describe("ComparedCard", () => {
  let wrapper;
  let mockData;
  let handleMockCardClick;

  beforeEach(() => {
    handleMockCardClick = jest.fn();
    mockData = [
      { location: "COLORADO", stats: { 2004: 0 }, display: false, clicked: 0 },
      { location: "ACADEMY 20", stats: { 2004: 0 }, display: false, clicked: 1 }
    ];
    wrapper = shallow(
      <ComparedCard
        location={mockData[0].location}
        stats={mockData[0].stats}
        handleCardClick={handleMockCardClick}
      />,
      <ComparedCard
        location={mockData[1].location}
        stats={mockData[1].stats}
        handleCardClick={handleMockCardClick}
      />
    );
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("handleCardClick should recognize click on correct card", () => {
    const clickedCard = wrapper.find("section");
    clickedCard.simulate("click");

    expect(handleMockCardClick).toHaveBeenCalledWith("COLORADO");
  });
});
