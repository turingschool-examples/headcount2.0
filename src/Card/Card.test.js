import React from "react";
import Card from "./Card.js";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe('Card', () => {
  let card;
  const data = [ { 2007: 0.013 }, { 2009: 3.004 }, { 2013: 1.101 } ];
 
  beforeEach(() => {
   card = shallow(< Card location={ 'Colorado' } stats={ data } />)
 })

 it('should render a card with output from the location props that it was passed', () => {
   expect(card.find('h1').text()).toBe('Colorado')
 })

 it('should render a card with output from the stats props that it was passed', () => {
   expect(card.find('li').length).toEqual(data.length)
 })
 })




//setup

//execution

//assertion
