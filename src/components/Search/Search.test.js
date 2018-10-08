import React from "react";
import Search from "./Search";
import { shallow, mount } from "enzyme";

describe("Search", () => {
  let wrapper;
  let handleMockCardClick;
  let mockInputEvent = {
    target: { value: "colorado" }
  };

  beforeEach(() => {
    handleMockCardClick = jest.fn();
    wrapper = shallow(<Search handleSearch={handleMockCardClick} />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("calls handleChange when input is changed", () => {
    wrapper = mount(<Search handleSearch={handleMockCardClick} />);
    const spy = jest.spyOn(wrapper.instance(), "handleChange");

    wrapper.instance().forceUpdate();
    wrapper.find(".search-field").simulate("change", mockInputEvent);

    expect(spy).toHaveBeenCalled();
  });

  it("should update state when handleChanged is called", () => {
    const initialState = { input: "" };
    expect(wrapper.state()).toEqual(initialState);

    wrapper.instance().handleChange(mockInputEvent);
    expect(wrapper.state()).toEqual({ input: "colorado" });
  });

  it("should call handleSearch when handleChange is invoked", () => {
    wrapper.instance().handleChange(mockInputEvent);
    expect(handleMockCardClick).toHaveBeenCalled();
  });
});
