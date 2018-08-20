import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;
  beforeEach(() => { 
    wrapper = shallow(<App />);
  });	
	
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state with an empty array for districtData', () => {
    expect(wrapper.state().districtData).toEqual([]);
  });

  it('should update state with district cards when the filterLocations method is invoked', () => {
    wrapper.instance().filterLocations();
    expect(wrapper.state().districtData.length).toEqual(181);
  });

  it('should update state to correct array length when the location is passed into filterLocations', () => {
    const mockData = 'COLORADO';
    const expectedState = [
      {"location": "COLORADO", 
				 "stats": {
				 	"2004": 0.24, 
				 	"2005": 0.278, 
				 	"2006": 0.337, 
				 	"2007": 0.395, 
				 	"2008": 0.536, 
				 	"2009": 0.598, 
				 	"2010": 0.64, 
				 	"2011": 0.672, 
				 	"2012": 0.695, 
				 	"2013": 0.703, 
				 	"2014": 0.741
				 }}, 
				 {"location": "COLORADO SPRINGS 11", 
				 	"stats": {
				 		"2004": 0.069, 
				 		"2005": 0.509, 
				 		"2006": 0.638, 
				 		"2007": 0.994, 
				 		"2008": 0.992, 
				 		"2009": 1, 
				 		"2010": 0.993, 
				 		"2011": 0.994, 
				 		"2012": 0.993, 
				 		"2013": 0.989, 
				 		"2014": 0.994
				 	}}
				 ];
			
    wrapper.instance().filterLocations(mockData);
    expect(wrapper.state().districtData.length).toEqual(2);
    expect(wrapper.state().districtData).toEqual(expectedState);
  });
});

