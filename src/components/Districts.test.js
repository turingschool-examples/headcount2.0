import React from 'react';
import Districts from './Districts';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Districts', () => {
  let wrapper;
  const mockStats ={
    'COLORADO' : {
      location: 'COLORADO',
      stats: {},
      selected: false
    },
    'ARAPAHOE' : {
      location: 'ARAPAHOE',
      stats: {},
      selected: false
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Districts stats={mockStats} setSelectedCard={jest.fn()} />);
  });
  
  it('should match the snapshot', () => {    
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the districts', () => {
    expect(wrapper.find(Card).length).toEqual(2);
  });  
});
