import React from "react";
import { shallow } from "enzyme";
import ComparisonContainer from "../components/ComparisonContainer";
import ComparisonCard from "../components/ComparisonCard";
import DistrictCard from "../components/DistrictCard";
import kinderData from "../data/kindergartners_in_full_day_program";
import DistrictRepository from "../helper";

describe("ComparisonContainer", () => {
  let wrapper;
  let selectCards;
  let selectedCards;
  let schoolData;

  beforeEach(() => {
    const districts = [];
    const schoolData = new DistrictRepository(kinderData);
    selectedCards = [
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
    wrapper = shallow(
      <ComparisonContainer
        selectedCards={selectedCards}
        districts={districts}
        schoolData={schoolData}
        selectCards={selectCards}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render ComparisonCard if length of selectedCards is 2", () => {
    wrapper = shallow(
      <ComparisonContainer
        selectedCards={selectedCards}
        schoolData={schoolData}
      />
    );

    expect(wrapper.find(ComparisonCard).length).toEqual(1);
  });

  it("should render 2 DistrictCards if length of selectedCards is 2", () => {
    wrapper = shallow(
      <ComparisonContainer
        selectedCards={selectedCards}
        schoolData={schoolData}
      />
    );

    expect(wrapper.find(ComparisonCard).length).toEqual(1);
  });

  it("should render 1 DistrictCard if length of selectedCards is 1", () => {
    selectedCards = [
      {
        location: "COLORADO",
        stats: {
          2004: 0.24,
          2005: 0.278
        },
        selected: true
      }
    ];

    wrapper = shallow(
      <ComparisonContainer
        selectedCards={selectedCards}
        selectCards={selectCards}
        schoolData={schoolData}
      />
    );

    expect(wrapper.find(DistrictCard).length).toEqual(1);
  });

  it("should render 0 DistrictCards if selectedCards is empty", () => {
    selectedCards = [];

    wrapper = shallow(
      <ComparisonContainer
        selectedCards={selectedCards}
        selectCards={selectCards}
        schoolData={schoolData}
      />
    );

    expect(wrapper.find(DistrictCard).length).toEqual(0);
  });
});
