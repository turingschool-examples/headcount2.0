/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  let mockHandleCompareCards;

  beforeEach(() => {
    mockHandleCompareCards = jest.fn()
    const mockedSchoolData = {
      data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
        2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
      dataType: "Percent",
      location: "ACADEMY 20"}
    wrapper = shallow(<Card 
                schoolData={mockedSchoolData}
                handleCompareCards={mockHandleCompareCards}
                size='large'
        />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should execute handleCompareCards when clicked', () => {
    wrapper.find('article').simulate('click')
    expect(mockHandleCompareCards.mock.calls.length).toBe(1)
  })
  // it('should render all of the key value pairs in data', () => {
  //   expect(wrapper.find('li').length).toEqual(11);
  // })
})