import React from 'react';
import ReactDOM from 'react-dom';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper.js'
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', ()=>{
  let wrapper; 

  beforeEach(()=>{
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  it('should have default state', () => {
    const mockState = {
      data: new DistrictRepository(kinderData),
      filter: undefined,
      selection: []
    }

    expect(wrapper.state()).toEqual(mockState)
  });

  // it('should call setState on filter when processFilter() is called', () => {
  //   const data = new DistrictRepository(kinderData);
    
  //   const mockState = {
  //     data: data,
  //     filter: {"COLORADO SPRINGS 11": {
  //         "location": "COLORADO SPRINGS 11",
  //         "stats": {
  //           "2004": 0.069,
  //           "2005": 0.509,
  //           "2006": 0.638,
  //           "2007": 0.994,
  //           "2008": 0.992,
  //           "2009": 1,
  //           "2010": 0.993,
  //           "2011": 0.994,
  //           "2012": 0.993,
  //           "2013": 0.989,
  //           "2014": 0.994,
  //         },
  //       },
  //     },
  //     selection: []
  //   }

  //   wrapper.instance().processFilter('colorado spring');

  //   expect(wrapper.state()).toEqual(mockState)
  // })


});
