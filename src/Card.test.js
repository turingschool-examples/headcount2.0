import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

describe("Card", () => {
  let wrapper;
  let handleMockCardClick;

  beforeEach(() => {
    handleMockCardClick = jest.fn();
    wrapper = shallow(
      <Card
        stats={{ 2004: 0 }}
        display={true}
        location="Colorado"
        handleCardClick={handleMockCardClick}
      />
    );
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("handleCardClick should recognize click on correct card", () => {
    const clickedCard = wrapper.find("section");
    clickedCard.simulate("click");
    
    expect(handleMockCardClick).toHaveBeenCalledWith("Colorado");
  });
});
