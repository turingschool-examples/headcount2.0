import React from "react";
import SearchForm from "../components/SearchForm";
import { shallow } from "enzyme";

describe("SearchForm", () => {
  it("it updates the state when the input value changes", () => {
    const wrapper = shallow(<SearchForm findDistricts={jest.fn()} />);

    const mockEvent = { target: { value: "mike" } };
    const anticipatedState = "mike";

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().districtSeach).toEqual(anticipatedState);
  });

  it("should update state when handleInput is invoked", () => {
    const wrapper = shallow(<SearchForm findDistricts={jest.fn()} />);
    const mockInput = { target: { value: "mike" } };
    const anticipatedState = "mike";

    wrapper.instance().handleChange(mockInput);

    expect(wrapper.state("districtSearch")).toEqual(anticipatedState);
  });
});
