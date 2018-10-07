import React from 'react';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper.js';
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
    });
    expect(wrapper).toMatchSnapshot();    
  });

  it('should have default state', () => {
    const mockState = {
      data: new DistrictRepository(kinderData),
      filter: undefined,
      selection: []
    };

    expect(wrapper.state().filter).toEqual(mockState.filter);
    expect(wrapper.state().selection).toEqual(mockState.selection);
    expect(JSON.stringify(wrapper.state().data)).
      toEqual(JSON.stringify(new DistrictRepository(kinderData)));
  });

  it('should call setState on filter when processFilter() is called', () => {

    wrapper.instance().processFilter('colorado spri');

    expect((wrapper.state().filterString)).toEqual((
      'colorado spri'));
  });

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
    };
    wrapper.instance().processSelection(argument);
    expect(wrapper.state().selection).toEqual([argument]);
  });

  it('should remove a district if called twice', () => {
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
    };
    wrapper.instance().processSelection(argument);
    wrapper.instance().processSelection(argument);
    expect(wrapper.state().selection).toEqual([]);
  });

  it('should update state when toggleModal is called', () => {
    expect(wrapper.state().modalClass).toEqual('hidden-modal info-modal');

    wrapper.instance().toggleModal();

    expect(wrapper.state().modalClass).toEqual('info-modal');
  });

  it('should update state back when toggleModal is called twice', () => {
    expect(wrapper.state().modalClass).toEqual('hidden-modal info-modal');

    wrapper.instance().toggleModal();
    wrapper.instance().toggleModal();


    expect(wrapper.state().modalClass).toEqual('hidden-modal info-modal');
  });

  it('should update modalClass when unToggleModal is called', () => {
    wrapper.instance().toggleModal();
    wrapper.instance().untoggleModal();

    expect(wrapper.state().modalClass).toEqual('hidden-modal info-modal');
  });

  it('should filter out unselected cards', () => {
    const argument1 = {
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
    };

    const argument2 = {
      location: 'ANOTHER COUNTY',
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
    };

    wrapper.setState({
      selection: [argument1, argument2]
    });

    wrapper.instance().processSelection(argument1);
    expect(wrapper.state().selection).toEqual([argument2]);
  });

  it('should setState to default when passed close', () => {
    wrapper.instance().processSelection('close');

    expect(wrapper.state().selection).toEqual([]);
    expect(JSON.stringify(wrapper.state().data)).
      toEqual(JSON.stringify(new DistrictRepository(kinderData)));
  });

});
