import DistrictContainer from "../../src/components/DistrictContainer";
import KinderData from "../../data/kindergartners_in_full_day_program";
import React from "react";
import { shallow, render } from "enzyme";

describe("DistrictContainer Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DistrictContainer />);
  });

  it.skip(
    "should render a div with a className of district-repository-container",
    () => {
      expect(wrapper.find("div").length).toEqual(1);
    }
  );
});
