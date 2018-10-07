import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe('Card', ()=>{
  let wrapper; 

  const mockData = {
    classLabel: 'card',
    location: 'ADAMS COUNTY 14',
    stats: {
      2004: 0.228, 
      2005: 0.3, 
      2006: 0.293, 
      2007: 0.306, 
      2008: 0.673,
      2009: 1,
      2010: 1,
      2011: 1,
      2012: 1,
      2013: 0.998,
      2014: 1
    }
  };

  const mockProcessSelection = jest.fn();

  beforeEach(()=>{
    wrapper = shallow(<Card 
      selection={['1']} 
      data={mockData} 
      processSelection={mockProcessSelection} 
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  it('should call processSelection when card is clicked', () => {
    wrapper.find('.card').simulate('click');

    expect(mockProcessSelection.mock.calls.length).toBe(1);
  }); 

});