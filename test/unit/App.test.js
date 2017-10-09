import React from 'react';
import ComparisonCard from '../../src/ComparisonCard';
import Search from '../../src/Search';
import CardContainer from '../../src/CardContainer';
import App from '../../src/App';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('App component unit testing', () => {
  let district = new DistrictRepository(kinderData);
  let mountWrapper;

  beforeEach(() => {
    mountWrapper = mount(<App />);
  });

  test.skip('should create an instance of App', () =>{
    expect(mountWrapper.exists()).toEqual(true);
  });

  test.skip('App should render an instance of Hero', () => {
    const hero = mountWrapper.find('Hero');
    expect(hero.exists()).toEqual(true);
  });

  test.skip('App should render an instance of CardContainer', () => {
    const cardContainer = mountWrapper.find('CardContainer');
    expect(cardContainer.exists()).toEqual(true);
  });

  test.skip('App should render an instance of Search', () => {
    const search = mountWrapper.find('Search');
    expect(search.exists()).toEqual(true);
  });

  test.skip('App should render an instance of CardComparison', () => {
    const cardComparison = mountWrapper.find('CardComparison');
    expect(cardComparison.exists()).toEqual(true);
  });

  test.skip('state should have dataObject property set to new instance of DistrictRepository', () => {
    expect(mountWrapper.state('dataObject')).toEqual(district);
  });

  test.skip('state should have displayArray property that contains kinderData objects', () => {
    expect(mountWrapper.state('displayArray')).toEqual(district.findAllMatches());
  })

  test.skip('state should have comparisonArray property that contains empty array', () => {
    expect(mountWrapper.state('comparisonArray')).toEqual([]);
  });

  test.skip('state should have comparisonCardArray property that contains empty array', () => {
    expect(mountWrapper.state('comparisonCardArray')).toEqual([]);
  });

  test.skip('cardSearch function should update displayArray.state', () => {
    expect(mountWrapper.state('displayArray')).toEqual(district.findAllMatches());

    let dataObj = district.findByName('colorado');

    let mockFunc = () => {
      mountWrapper.setState({
        displayArray: [dataObj]
      });
    };

    const search = mount(<Search cardSearch={mockFunc}/>);
    const input = search.find('input');

    input.simulate('change', {target: { value: 'colorado'}});

    expect(mountWrapper.state('displayArray')).toEqual([district.findByName('colorado')]);
  });

  
});
