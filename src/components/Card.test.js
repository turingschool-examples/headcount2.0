import React from 'react';
import Districts from './Districts';
import Card from './Card';
import {shallow, mount} from 'enzyme';

describe('Card', () => {

  const mockData = {
    'COLORADO' : {
      location: 'COLORADO',
      stats: {},
      selected: false
    }
  };
  const mockLocation ='COLORADO';
  const mockStats = {};
  const selected = true;
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card stats={mockData} setSelectedCard={jest.fn()} selectedCards={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('adds class of selected to Card', () => {
    const setSelectedCard = jest.fn();
    const wrapper = shallow(<Card location={mockLocation} stats={mockData} setSelectedCard={setSelectedCard} selected={selected} />);
    
    expect(wrapper.find(".selected").length).toEqual(1);
  });

  it('calls selectedState on Click', () => {  
    const mockSetSelectedCard = jest.fn();
    const wrapper = mount(<Card location={mockLocation} stats={mockStats} setSelectedCard={mockSetSelectedCard} selected={selected} />);

    wrapper.find('.card').simulate('click');

    expect(mockSetSelectedCard).toHaveBeenCalledTimes(1);
  });
})