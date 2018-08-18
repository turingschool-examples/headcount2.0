import React from 'react';
import { shallow } from 'enzyme';

import LocationList from '../LocationList';

describe('LocationList', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<LocationList displayedLocations={[]} />);
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot with one location', () => {
    const locations = ['COLORADO'];
    const wrapper = shallow(<LocationList displayedLocations={locations} />);
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot with multiple locations', () => {
    const locations = ['COLORADO', 'ACADEMY 20', 'AGATE 300']; 
    const wrapper = shallow(<LocationList displayedLocations={locations} />);
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call selectLocation and clearSearch when a location button is clicked', () => {
    const selectLocationMock = jest.fn();
    const clearSearchMock = jest.fn();
    const locations = ['COLORADO'];
    const wrapper = shallow(
      <LocationList 
        displayedLocations={locations} 
        selectLocation={selectLocationMock} 
        clearSearch={clearSearchMock}/>
    );

    wrapper.find('.LocationList__btn').simulate('click');

    expect(selectLocationMock).toHaveBeenCalled();
    expect(clearSearchMock).toHaveBeenCalled();
  });

});