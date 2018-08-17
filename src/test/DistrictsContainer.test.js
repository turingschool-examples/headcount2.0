import React from "react";
import { shallow } from "enzyme";
import DistrictsContainer from "../components/DistrictsContainer";
import DistrictCard from "../components/DistrictCard";

describe("DistrictsContainer", () => {
  const mockCard = [
    { "FEE Room G": { 2018: 19 }, "FEE Room E": { 2018: 19 } },
    { "BEE Room G": { 2018: 14 }, "BEE Room E": { 2018: 12 } }
  ];
  let wrapper;
  let anticipated;

  it("should match the snapshot", () => {
    wrapper = shallow(<DistrictsContainer schoolData={mockCard} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render all found districts", () => {
    wrapper = shallow(<DistrictsContainer schoolData={mockCard} />);
    anticipated = wrapper.find(DistrictCard).length;
    expect(anticipated).toEqual(2);
  });
});
