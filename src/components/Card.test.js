import React from 'react';
import Districts from './Districts';
import Card from './Card';
import {shallow, mount} from 'enzyme';

describe('Card', () => {
  let wrapper;
  const mockLocation ='COLORADO';
  const mockStats = {};
  const selected = true;
  const mockSetSelectedCard = jest.fn();
  const setSelectedCard = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Card location={mockLocation} stats={mockStats} setSelectedCard={setSelectedCard} selected={selected} />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('adds class of selected to Card', () => {
    expect(wrapper.find('.selected').length).toEqual(1);
  });

  it('calls selectedState on Click', () => {  
    const wrapper = mount(<Card location={mockLocation} stats={mockStats} setSelectedCard={mockSetSelectedCard} selected={selected} />);

    wrapper.find('.card').simulate('click');

    expect(mockSetSelectedCard).toHaveBeenCalledTimes(1);
  });
});