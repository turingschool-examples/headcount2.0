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

  it('should render the comparison page if selection.length is === 2', () => {
    wrapper.setState({
      selection: [{thing: 1}, {thing: 2}]
    })
    expect(wrapper).toMatchSnapshot();    
  });

  it('should have default state', () => {
    const mockState = {
      data: new DistrictRepository(kinderData),
      filter: undefined,
      selection: []
    }

    expect(wrapper.state().filter).toEqual(mockState.filter);
    expect(wrapper.state().selection).toEqual(mockState.selection);
    expect(JSON.stringify(wrapper.state().data)).toEqual(JSON.stringify(new DistrictRepository(kinderData)))
  });

  it('should call setState on filter when processFilter() is called', () => {
    const data = new DistrictRepository(kinderData);
    
    const mockState = {
      data: data,
      filter: {"COLORADO SPRINGS 11": {
          "location": "COLORADO SPRINGS 11",
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
            "2014": 0.994,
          },
        },
      },
      selection: []
    }

    wrapper.instance().processFilter('colorado spri');

    expect(JSON.stringify(wrapper.state())).toEqual(JSON.stringify(mockState))
  })

  it('should add an district to this.state.selection when called', () => {
    const argument = {
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
    }
    wrapper.instance().processSelection(argument)
    expect(wrapper.state().selection).toEqual([argument])
  })

  it('should remove a district from this.state.selection if called twice', () => {
    const argument = {
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
    }
    wrapper.instance().processSelection(argument)
    wrapper.instance().processSelection(argument)
    expect(wrapper.state().selection).toEqual([])
  })

  it('should set this.state.selection to an empty array when clearSelections is called', () => {
    const argument = {
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
    }

    wrapper.instance().processSelection(argument)
    wrapper.instance().clearSelections()
    expect(wrapper.state().selection).toEqual([])
  })

});
