import React from "react";
import { shallow } from "enzyme";
import ComparisonContainer from "../components/ComparisonContainer";
import ComparisonCard from "../components/ComparisonCard";

describe("ComparisonContainer", () => {
  let wrapper;

  it("should match the snapshot", () => {
    wrapper = shallow(<ComparisonContainer />);

    expect(wrapper).toMatchSnapShot();
  });
});
