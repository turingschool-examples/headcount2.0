import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import DistrictRepository from "./helper.js";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import App from "./App";

describe("App component", () => {
  let wrapper;
  const district = new DistrictRepository(kinderData);
  const allDistricts = district.stats;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should add helper dataset to state", () => {
    wrapper.setState({ schoolData: allDistricts });
    expect(wrapper.state().schoolData).toEqual(district.stats);
  });
});
