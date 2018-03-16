import React from 'react';
import {shallow} from 'enzyme';
import CompareContainer from './CompareContainer.js';

describe( 'CompareContainer', () => {
  const selectLocation = jest.fn();
  const comparedAverage = {
    COLORADO: 0.32,
    'COLORADO SPRINGS': 0.76,
    compared: 0.5 
  };

  let wrapper, selectedLocations;

  beforeEach(()=> {
    selectedLocations = [];
    wrapper = shallow(
      <CompareContainer
        searchValue={''}
        selectLocation={selectLocation} 
        selectedLocations={selectedLocations}
        comparedAverage={comparedAverage} 
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the Card when there are 2 selected locations', () => {
    selectedLocations = [{ 
      location: 'COLORADO', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }, { 
      location: 'COLORADO SPRINGS', 
      stats: {
        '2017': 0.34,
        '2016': 0.45
      } 
    }];
    wrapper = shallow(
      <CompareContainer
        searchValue={''}
        selectLocation={selectLocation} 
        selectedLocations={selectedLocations}
        comparedAverage={comparedAverage} 
      />);
    expect(wrapper).toMatchSnapshot();

  });
});

