import React from "react";
import SearchForm from "../components/SearchForm";
import { shallow } from "enzyme";

describe("SearchForm", () => {
  const mockFn = jest.fn();
  let shallowWrapper = shallow(<SearchForm findDistricts={mockFn} />);

  it("it updates the state when the input value changes", () => {
    const mockEvent = { target: { value: "mike" } };
    const anticipatedState = "mike";

    shallowWrapper.instance().handleChange(mockEvent);
    expect(shallowWrapper.state().districtSearch).toEqual(anticipatedState);
  });

  it("should update state when handleInput is invoked", () => {
    const mockInput = { target: { value: "mike" } };
    const anticipatedState = "mike";

    shallowWrapper.instance().handleChange(mockInput);

    expect(shallowWrapper.state("districtSearch")).toEqual(anticipatedState);
  });
});
