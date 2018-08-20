import React from "react";
import ReactDOM from "react-dom";
import ComparisonCard from "../components/ComparisonCard";
import { shallow } from "enzyme";
import kinderData from "../data/kindergartners_in_full_day_program";
import DistrictRepository from "../helper";

describe("ComparisonCard", () => {
  let wrapper;
  const schoolData = new DistrictRepository(kinderData);
  const selectedCards = [
    {
      location: "AGATE 300",
      stats: {
        2004: 1,
        2005: 1,
        2006: 0
      },
      selected: true
    },
    {
      location: "CALHAN RJ-1",
      stats: {
        2004: 0.353,
        2005: 0,
        2006: 0.423
      },
      selected: true
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <ComparisonCard selectedCards={selectedCards} schoolData={schoolData} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <ComparisonCard selectedCards={selectedCards} schoolData={schoolData} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
