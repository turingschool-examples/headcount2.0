import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('should render each data point in a list item', () => { const mockData = { 2004: 0.75, 2005: 0.9 }
    const wrapper = shallow(<Card title="Colorado" content={mockData}/>)
    expect(wrapper.find('li').length).toEqual(2)
  })

  it('should match the snapshot', () => {
    const mockContent = {
      2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49}
    const wrapper = shallow(<Card 
                              title='ACADEMY 20'
                              content={ mockContent } />)
    expect(wrapper).toMatchSnapshot()
  })

})