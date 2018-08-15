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

  it("should render two paragraph elements and one container element", () => {
    expect(shallowWrap.find("p").length).toEqual(2);
    expect(shallowWrap.find("container").length).toEqual(1);
  });

  it("should render two p elements and one container element with text", () => {
    expect(
      shallowWrap
        .find("p")
        .first()
        .text()
    ).toEqual("ACADEMY 20 : 0.407");

    expect(
      shallowWrap
        .find("p")
        .at(1)
        .text()
    ).toEqual("COLORADO : 0.53");

    expect(shallowWrap.find("container").text()).toEqual("----0.768----");
  });

  it("should match snapshot", () => {
    expect(shallowWrap).toMatchSnapshot();
  });
});
