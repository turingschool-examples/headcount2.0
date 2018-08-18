import React from "react";
import ComparisonCard from "../components/ComparisonCard";
import { shallow } from "enzyme";

describe("ComparisonCard", () => {
  let wrapper;
  let mock;

  it("should match the snapshot", () => {
    wrapper = shallow(<ComparisonCard />);

    expect(wrapper).toMatchSnapshot();
  });
});
