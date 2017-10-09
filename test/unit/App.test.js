import React from 'react';
import ComparisonContainer from '../../src/ComparisonContainer';
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

  test('should create an instance of App', () =>{
    expect(mountWrapper.exists()).toEqual(true);
  });

  test('App should render an instance of Hero', () => {
    const hero = mountWrapper.find('Hero');
    expect(hero.exists()).toEqual(true);
  });

  test('App should render an instance of CardContainer', () => {
    const cardContainer = mountWrapper.find('CardContainer');
    expect(cardContainer.exists()).toEqual(true);
  });

  test('App should render an instance of Search', () => {
    const search = mountWrapper.find('Search');
    expect(search.exists()).toEqual(true);
  });

  test('App should render an instance of ComparisonContainer', () => {
    const ComparisonContainer = mountWrapper.find('ComparisonContainer');
    expect(ComparisonContainer.exists()).toEqual(true);
  });

  test(`state should have dataObject property set to new
    instance of DistrictRepository`, () => {
      expect(mountWrapper.state('dataObject')).toEqual(district);
    });

  test(`state should have displayArray property
    that contains kinderData objects`, () => {
      expect(mountWrapper.state('displayArray'))
        .toEqual(district.findAllMatches());
    });

  test(`state should have comparisonArray property
    that contains empty array`, () => {
      expect(mountWrapper.state('comparisonArray')).toEqual([]);
    });

  test(`state should have comparisonCardArray property
    that contains empty array`, () => {
      expect(mountWrapper.state('comparisonCardArray')).toEqual([]);
    });

  test('cardSearch function should update displayArray.state', () => {
    expect(mountWrapper.state('displayArray'))
      .toEqual(district.findAllMatches());

    let dataObj = district.findByName('colorado');

    let mockFunc = () => {
      mountWrapper.setState({
        displayArray: [dataObj]
      });
    };

    const search = mount(<Search cardSearch={mockFunc}/>);
    const input = search.find('input');

    input.simulate('change', {target: { value: 'colorado'}});

    expect(mountWrapper.state('displayArray'))
      .toEqual([district.findByName('colorado')]);
  });

  test(`onCardClick function should update comparisonArray.state &
  comparisonCardArray.state`, () => {
      expect(mountWrapper.state('comparisonArray')).toEqual([]);
      expect(mountWrapper.state('comparisonCardArray')).toEqual([]);

      let ComparisonContainerObject =
        district.compareDistrictAverages('aspen 1', 'bennett 29j' );
      let card1 = district.findByName('aspen 1');
      let card2 = district.findByName('bennett 29j');
      let comparisonArray = [card1, card2];

      let mockFunc = () => {
        mountWrapper.setState({
          comparisonArray: [card1, card2],
          comparisonCardArray: [ComparisonContainerObject]
        });
      };

      const cardContainer = mount(
        <CardContainer
          comparisonArray={comparisonArray}
          dataArray={district.findAllMatches()}
          onCardClick={mockFunc} />
      );

      const cardNode = cardContainer.find('Card').first();

      cardNode.simulate('click');

      expect(mountWrapper.state('comparisonArray')).toEqual(comparisonArray);
      expect(mountWrapper.state('comparisonCardArray'))
        .toEqual([ComparisonContainerObject]);
    });

  test('child components should receive correct props', () => {

    let mockFunc = () => {};
    let ComparisonContainerObject =
      district.compareDistrictAverages('aspen 1', 'bennett 29j' );
    let card1 = district.findByName('aspen 1');
    let card2 = district.findByName('bennett 29j');
    let comparisonArray = [card1, card2];
    let comparisonCardArray = [ComparisonContainerObject];

    const search = mount(<Search cardSearch={mockFunc}/>);

    expect(search.props().cardSearch).toEqual(mockFunc);

    const cardContainer = mount(
      <CardContainer
        comparisonArray={comparisonArray}
        dataArray={district.findAllMatches()}
        onCardClick={mockFunc} />
    );

    expect(cardContainer.props().comparisonArray).toEqual(comparisonArray);
    expect(cardContainer.props().dataArray).toEqual(district.findAllMatches());
    expect(cardContainer.props().onCardClick).toEqual(mockFunc);

    const testComparisonContainer = mount(
      <ComparisonContainer
        comparisonArray={comparisonArray}
        comparisonCardArray={comparisonCardArray}
        onCardClick={mockFunc} />
    );

    expect(testComparisonContainer.props()
      .comparisonArray).toEqual(comparisonArray);
    expect(testComparisonContainer.props()
      .comparisonCardArray).toEqual(comparisonCardArray);
    expect(testComparisonContainer.props().onCardClick).toEqual(mockFunc);
  });

});
