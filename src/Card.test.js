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
        dispay={true}
        location="Colorado"
        handleCardClick={handleMockCardClick}
      />
    );
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should recognize click on correct card", () => {
    console.log(handleMockCardClick('COLORADO'))
  });
});
