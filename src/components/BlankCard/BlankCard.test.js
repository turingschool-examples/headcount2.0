import React from "react";
import BlankCard from "./BlankCard";
import { shallow } from "enzyme";

it("matches the snapshot", () => {
  const wrapper = shallow(<BlankCard />);
  expect(wrapper).toMatchSnapshot();
});
