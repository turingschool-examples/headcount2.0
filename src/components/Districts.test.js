import React from 'react';
import Districts from './Districts';
import Card from './Card';
import {shallow, mount} from 'enzyme';

describe('Districts', () => {

  
  it('should match the snapshot', () => {
    const wrapper = shallow(<Districts stats={{location: 'Colorado', stats:{}, selected: false}} setSelectedCard={jest.fn()} selectedCards={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all the districts', () => {
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
    
    const wrapper = shallow(<Districts stats={mockStats} setSelectedCard={jest.fn()} selectedCards={[]} />);

    expect(wrapper.find(Card).length).toEqual(2);
  });

  
  
});
