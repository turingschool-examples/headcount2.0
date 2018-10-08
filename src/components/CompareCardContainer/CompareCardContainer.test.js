import React from "react";
import CompareCardContainer from "./CompareCardContainer";
import CompardCard from "./ComparedCard";
import { shallow } from "enzyme";

describe("CompareCardContainer", () => {
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
      <CompareCardContainer
        comparedCards={mockData}
        comparedAvg={{}}
        handleCardClick={handleMockCardClick}
      />
    );
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render two ComparedCards", () => {
    expect(wrapper.find(CompardCard).length).toEqual(2);
  });
});
