import React from "react";
import { ComparisonCard } from "../Components/ComparisonCard";

describe("ComparisonCard", () => {
  let shallowWrap;
  let mockData = { "ACADEMY 20": 0.407, COLORADO: 0.53, compared: 0.768 };
  beforeEach(() => {
    shallowWrap = shallow(<ComparisonCard comparisonData={mockData} />);
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined();
  });

  it("should match snapshot", () => {
    shallowWrap = shallow(<ComparisonCard comparisonData={{}} />);
    expect(shallowWrap).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
