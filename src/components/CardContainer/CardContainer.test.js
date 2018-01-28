/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    const mockedHandleCompareCards = jest.fn();
    const mockedState = [{
      data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
        2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
      dataType: "Percent",
      location: "ACADEMY 20"}]
    wrapper = shallow(<CardContainer 
                          schoolData={mockedState}
                          handleCompareCards={mockedHandleCompareCards}
                    />)

  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render all the Cards it recieves', () => {
    expect(wrapper.find('Card').length).toEqual(1)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})