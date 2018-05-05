import React from 'react';
import Districts from './Districts';
import Card from './Card';
import {shallow, mount} from 'enzyme';

describe('Card', () => {
  
  it('should match the snapshot', () => {
    const mockStats ={
      'COLORADO' : {
        location: 'COLORADO',
        stats: {},
        selected: false
      }};

    const wrapper = shallow(<Card stats={mockStats} setSelectedCard={jest.fn()} selectedCards={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('adds class of selected to Card', () => {
    const mockLocation ='COLORADO';
    const mockStats = {};
    const selected = true;
    const setSelectedCard = jest.fn();
  
    const wrapper = shallow(<Card location={mockLocation} stats={mockStats} setSelectedCard={setSelectedCard} selected={selected} />);
    
    expect(wrapper.find(".selected").length).toEqual(1);
  });

  it('calls selectedState on Click', () => {
    const mockLocation ='COLORADO';
    const mockStats = {};
    const selected = true;
    const setSelectedCard = jest.fn();
    const wrapper = mount(<Card location={mockLocation} stats={mockStats} setSelectedCard={setSelectedCard} selected={selected} />);
    const spy = spyOn(wrapper.instance(), setSelectedCard)
    
    wrapper.find('article').simulate('click');
    expect()
    
  });
}); 