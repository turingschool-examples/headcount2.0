import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a state key of districtRepository', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData);
    expect(wrapper.state().districtRepository).toEqual(expected);
    expect(typeof wrapper.state().districtRepository).toEqual('object');
  });

  it('should have a state key of districtsArray', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData).findAllMatches();
    expect(wrapper.state().districtsArray).toEqual(expected);
  });

  it('should have a state key of comparisonArray set to an empty array', () => {
    const wrapper = shallow(<App />);
    const expected = [];
    expect(wrapper.state().comparisonArray).toEqual(expected);
  });

  it('should set the districtsArray state on invoking handleSearch', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData).findAllMatches('CO');
    wrapper.instance().handleSearch('CO');
    expect(wrapper.state().districtsArray).toEqual(expected);
  });

  it('should update the state when retrieveSchoolData is called', () => {
    const wrapper = shallow(<App />);
    const expected = new DistrictRepository(kinderData);
    wrapper.instance().retrieveSchoolData(kinderData);
    expect(wrapper.state().districtRepository).toEqual(expected);
  });

  it('should run handleSearch on change of the Nav input', () => {
    const wrapper = mount(<App />);
    const expected = new DistrictRepository(kinderData).findAllMatches('a');
    wrapper.find('input').props().value = 'a';
    wrapper.find('input').simulate('change', {target: {value: 'a'}});
    expect(wrapper.state().districtsArray).toEqual(expected);
  });

  it('should not filter districts if no input is provided', () => {
    const wrapper = mount(<App />);
    wrapper.find('input').props().value = '';
    wrapper.find('input').simulate('change', {target: {value: ''}});
    expect(wrapper.state().districtsArray.length).toEqual(181);
    expect(wrapper.find('Card').length).toEqual(181);
  });

  it('should produce no cards if search input does not match district', () => {
    const wrapper = mount(<App />);
    wrapper.find('input').props().value = 'axy4';
    wrapper.find('input').simulate('change', {target: {value: 'axy4'}});
    expect(wrapper.state().districtsArray.length).toEqual(0);
    expect(wrapper.find('Card').length).toEqual(0);
  });

  it('clearComparisonArray should clear comparisonArray', () => {
    const wrapper = mount(<App />);
    let loc1 = new DistrictRepository(kinderData).findByName("Colorado");
    let loc2 = new DistrictRepository(kinderData).findByName("ACADEMY 20");
    wrapper.instance().setState({comparisonArray: [loc1, loc2]});   
    wrapper.instance().clearComparisonArray(loc1.location, loc2.location);
    expect(wrapper.state().comparisonArray).toEqual([]);
  });

  it('clearComparisonArray should flip the selected flag', () => {
    const wrapper = mount(<App />);
    let loc1 = new DistrictRepository(kinderData).findByName("Colorado");
    let loc2 = new DistrictRepository(kinderData).findByName("ACADEMY 20");
    wrapper.instance().setState({comparisonArray: [loc1, loc2]});   
    expect(loc1.selected).toEqual(false);
    expect(loc2.selected).toEqual(false);
  });

  it('updateSelectedFlag should flip the selected flag boolean', () => {
    const wrapper = mount(<App />);
    let location1 = new DistrictRepository(kinderData).findByName("Colorado");
    let location2 = new DistrictRepository(kinderData).findByName("ACADEMY 20");
    wrapper.instance().setState({comparisonArray: [location1, location2]});
    wrapper.instance().updateSelectedFlag(location1.location);
    wrapper.instance().updateSelectedFlag(location2.location);
    expect(wrapper.state().districtsArray[0].selected).toEqual(true); 
    expect(wrapper.state().districtsArray[1].selected).toEqual(true);   
  });

  it('should set state using updateComparisonArray', () => {
    const wrapper = mount(<App />);
    const expected = new DistrictRepository(kinderData).findByName('Colorado');
    wrapper.instance().updateComparisonArray([expected]);
    expect(wrapper.state('comparisonArray')).toEqual([expected]);
  });

  it('addCardToComparison should add new Districts to comparisonArray ', () => {
    const wrapper = mount(<App />);
    let location1 = new DistrictRepository(kinderData).findByName('COLORADO');
    let location2 = new DistrictRepository(kinderData).findByName('ACADEMY 20');
    wrapper.instance().setState({comparisonArray: [location1]});
    wrapper.instance().addCardToComparison(location2.location);
    expect(wrapper.state('comparisonArray')).toEqual([location1, location2]);
  });

  it('addCardToComparison should remove zero index of comparisonArray', () => {
    const wrapper = mount(<App />);
    let location1 = new DistrictRepository(kinderData).findByName('COLORADO');
    let location2 = new DistrictRepository(kinderData).findByName('ACADEMY 20');
    let location3 = new DistrictRepository(kinderData).findByName('ASPEN #1');
    wrapper.instance().setState({comparisonArray: [location1, location2]});
    wrapper.instance().addCardToComparison(location3);
    expect(wrapper.state('comparisonArray')).toEqual([location2, location3]);
  });

  it('removeCardFromComparison should remove 0idx from comparisonArray', () => {
    const wrapper = mount(<App />);
    let loc1 = new DistrictRepository(kinderData).findByName('COLORADO');
    let loc2 = new DistrictRepository(kinderData).findByName('ACADEMY 20');    
    wrapper.instance().setState({comparisonArray: [loc1, loc2]});
    wrapper.instance().removeCardFromComparison('COLORADO');
    expect(wrapper.state('comparisonArray')).toEqual([loc2]);
  });

  it('removeCardFromComparison should remove 1idx from comparisonArray', () => {
    const wrapper = mount(<App />);
    let loc1 = new DistrictRepository(kinderData).findByName('COLORADO');
    let loc2 = new DistrictRepository(kinderData).findByName('ACADEMY 20');    
    wrapper.instance().setState({comparisonArray: [loc1, loc2]});
    wrapper.instance().removeCardFromComparison('ACADEMY 20');
    expect(wrapper.state('comparisonArray')).toEqual([loc1]);
  });

  it('should return the current state properties', () => {
    const wrapper = mount(<App />);
    let location1 = new DistrictRepository(kinderData).findByName('ACADEMY 20');
    let expected = new DistrictRepository(kinderData);
    wrapper.instance().setState({comparisonArray: [location1]});
    const answer = wrapper.instance().fetchCurrentState('ACADEMY 20');
    expect(answer.locationToCompare).toEqual(location1);
    expect(answer.comparisonArray).toEqual([location1]);
    expect(typeof answer.compareDistrictAverages).toBe('function');
    expect(answer.newRepositoryState).toEqual(expected);
  });
});
