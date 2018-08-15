import React from "react";
import ReactDOM from "react-dom";
import Search from "../Components/Search";

describe("Search", () => {
  let shallowWrap;

  beforeEach(() => {
    shallowWrap = shallow(<Search handleSubmit={jest.fn} />);
  });

  it("should exist", () => {
    expect(shallowWrap).toBeDefined;
  });

  it("should have default state properties", () => {
    expect(shallowWrap.state().userInput).toEqual("");
    expect(shallowWrap.state().searchSuggestions).toEqual([]);
  });

  it("should handleChange; set State and call suggest method", () => {
    shallowWrap.instance().handleChange({ value: "COLORADO" }, "userInput");

    expect(shallowWrap.state().userInput).toEqual("COLORADO");

    // const spy = jest.spyOn(Search.prototype, "suggestDistricts");
    // const mockfn = jest.fn();
    // const wrapper = mount(<Search handleChange={mockfn} />);
    // wrapper.instance().suggesDistricts();
    // expect(spy).toHaveBeenCalled();
  });

  it("should set state of Search suggestions based on userInput", () => {
    shallowWrap.instance().handleChange({ value: "Colorado" }, "userInput");

    const result = [
      {
        location: "COLORADO",
        stats: {
          "2004": 0.24,
          "2005": 0.278,
          "2006": 0.337,
          "2007": 0.395,
          "2008": 0.536,
          "2009": 0.598,
          "2010": 0.64,
          "2011": 0.672,
          "2012": 0.695,
          "2013": 0.703,
          "2014": 0.741
        }
      },
      {
        location: "COLORADO SPRINGS 11",
        stats: {
          "2004": 0.069,
          "2005": 0.509,
          "2006": 0.638,
          "2007": 0.994,
          "2008": 0.992,
          "2009": 1,
          "2010": 0.993,
          "2011": 0.994,
          "2012": 0.993,
          "2013": 0.989,
          "2014": 0.994
        }
      }
    ];

    shallowWrap.instance().suggestDistricts("Colorado");
    expect(shallowWrap.state().searchSuggestions).toEqual(result);
  });

  it("should send call handleSubmit in App", () => {
    let mockfn = jest.fn();
    shallowWrap = shallow(<Search handleSubmit={() => mockfn()} />);
    shallowWrap.instance().searchDistrict("Colorado");

    expect(mockfn).toHaveBeenCalled();
  });

  it("should render form container with input", () => {
    expect(shallowWrap.find("form").length).toEqual(1);
    expect(shallowWrap.find("input").length).toEqual(1);
  });

  it("should change state onChange of input field", () => {
    let eventOne = { target: { value: "Academy" } };
    let eventTwo = { target: { value: "Akron" } };

    let userInput = shallowWrap.find("input");
    userInput.simulate("change", eventOne);
    expect(shallowWrap.state().userInput).toEqual("Academy");
    userInput.simulate("change", eventTwo);
    expect(shallowWrap.state().userInput).toEqual("Akron");
  });

  it("should suggest districts based on user input", () => {
    let userInput = shallowWrap.find("input");
    let eventOne = { target: { value: "Acade" } };
    let eventTwo = { target: { value: "color" } };

    userInput.simulate("change", eventOne);

    let suggestionOne = shallowWrap.find("p");
    let suggestionsOne = suggestionOne.props().children;

    expect(suggestionsOne).toEqual("ACADEMY 20");

    userInput.simulate("change", eventTwo);

    let suggestionTwo = shallowWrap.find("p");
    let suggestionsTwo = suggestionTwo.map(suggest => suggest.props().children);

    expect(suggestionsTwo).toEqual(["COLORADO", "COLORADO SPRINGS 11"]);
  });
});
