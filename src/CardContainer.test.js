import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';
import Card from './Card';

describe('CardContainer', () => {
  let wrapper;

  it('should match the snapshot with all data passed in correctly', () => {
    const mockData = [{location: 'denver', stats: [{year: 2007}]}]
    wrapper = shallow(<CardContainer data={mockData} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render all the cards', () => {
    const mockData = [{location: 'denver', stats: [{2001: 2}]},
                      {location: 'boulder', stats: [{2002: 1}]}]
    wrapper = shallow(<CardContainer data={mockData} />)
    expect(wrapper.find(Card).length).toEqual(2)
  })
})