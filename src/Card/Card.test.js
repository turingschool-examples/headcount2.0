import React from "react";
import Card from "./Card.js";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe('Card', () => {
  let card;
  const data = { 
            location: "Colorado", stats: { "2007": 0.013, "2009": 3.004, "2013": 1.101 }
           };
 
  beforeEach(() => {
   card = shallow(< Card district={ data } />)
  })

  it('should render a card with output from the location props that it was passed', () => {
    expect(card.find('h3').text()).toBe('Colorado')
  })

  it('should render a card with output from the stats props that it was passed', () => {
    const expectedOutput = Object.keys(data.stats).length;
    expect(card.find('li').length).toEqual(expectedOutput)
  })

  it('should match the snapshot', () => {
    expect(card).toMatchSnapshot()
  })


 })
 




//setup

//execution

//assertion
