import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Compare from "./Compare.js";
import CompareCard from "./CompareCard.js"
import Card from "../Card/Card.js";

describe('Compare',() => {
  const mockedSingleCard = [
    {district:
      {location: 'ACADEMY 20', stats: {2004: .345}}}
  ]
  const mocked2Cards = [
    {district: {location: 'ACADEMY 20', stats: {2004: .345}}},  
    {district: {location: 'AGATE 300', stats: {2004: .455}}}
  ]


  it('should match snapshot', () => {
    const compare = shallow(<Compare
      comparedCards={[]}
      compareState = {jest.fn()} />)

    expect(compare).toMatchSnapshot()
  })

  it('should start with no rendering', () => {
    const compare = shallow(<Compare
      comparedCards={[]}
      compareState = {jest.fn()} />)
    expect(compare.find('div').child).toEqual(undefined)
  })

  it('should render a single Card when passed a comparedCards prop with a single card array', () => {
    const compare = mount(<Compare
      comparedCards={ mockedSingleCard }
      compareState = {jest.fn()} />)

    expect(compare.find(Card).length).toEqual(1)
  })

  it('should render 2 Cards and a CompareCard when passed a comparedCards prop with 2 card arrays', () => {
    const compare = mount(<Compare
      comparedCards={ mocked2Cards }
      compareState = {jest.fn()} />)

    expect(compare.find(Card).length).toEqual(2)
    expect(compare.find(CompareCard).length).toEqual(1)
  })
})
