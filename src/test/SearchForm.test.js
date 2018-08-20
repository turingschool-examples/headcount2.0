import React from "react";
import SearchForm from "../components/SearchForm";
import { shallow } from "enzyme";

describe("SearchForm", () => {
  let shallowWrapper;

  it("it updates the state when the input value changes", () => {
    const mockEvent = { target: { value: "mike" } };
    const anticipatedState = "mike";
    let mockFn = jest.fn();
    shallowWrapper = shallow(<SearchForm findDistricts={mockFn} />);

    shallowWrapper.instance().handleChange(mockEvent);
    expect(shallowWrapper.state().districtSearch).toEqual(anticipatedState);
  });

  it("should update state when handleInput is invoked", () => {
    const mockInput = { target: { value: "mike" } };
    const anticipatedState = "mike";
    let mockFn = jest.fn();
    shallowWrapper = shallow(<SearchForm findDistricts={mockFn} />);

    shallowWrapper.instance().handleChange(mockInput);

    expect(shallowWrapper.state("districtSearch")).toEqual(anticipatedState);
  });

  it("should sumit on click", () => {
    const mockFn = jest.fn();
    const event = { preventDefault: jest.fn(), target: { value: "" } };

    shallowWrapper = shallow(<SearchForm findDistricts={mockFn} />);
    shallowWrapper
      .find("form")
      .first()
      .simulate("submit", event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
