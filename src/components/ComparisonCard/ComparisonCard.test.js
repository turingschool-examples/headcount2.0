import React from "react";
import ComparisonCard from "./ComparisonCard";
import { shallow } from "enzyme";

describe("ComparisonCard", () => {
  let wrapper;
  let mockData;

  beforeEach(() => {
    mockData = {
      "ACADEMY 20": 0.407,
      COLORADO: 0.53,
      compared: 1.302
    };
    wrapper = shallow(<ComparisonCard {...mockData} />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
