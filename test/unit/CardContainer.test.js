import React from 'react';
import CardContainer from '../../src/CardContainer';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer unit testing', () => {
  const district = new DistrictRepository(kinderData);
  let shallowWrapper;
  let mountWrapper;
  let dataArray;
  let comparisonArray;
  let mockFunc;

  beforeEach(() => {
    mockFunc = () => {};
    comparisonArray = [district.findByName('colorado'), district.findByName('colorado springs 11')]
    dataArray = district.findAllMatches('colo');
    shallowWrapper = shallow(
      <CardContainer
        comparisonArray={comparisonArray}
        dataArray={dataArray}
        onCardClick={mockFunc} />
    );
    mountWrapper = mount(
      <CardContainer
        comparisonArray={comparisonArray}
        dataArray={dataArray}
        onCardClick={mockFunc} />
    );
  });

  test('should create an instance of CardContainer', () => {
    expect(shallowWrapper.exists()).toEqual(true);
  });

  test('should render an instance of card component and a surrounding section tag', () => {
    const section = mountWrapper.find('section');
    const card1 = section.find('Card').first();
    const card2 = section.find('Card').at(1);
    expect(section.exists()).toEqual(true);
    expect(card1.exists()).toEqual(true);
    expect(card2.exists()).toEqual(true);
  });

  test('should render and pass down correct information', () => {
    const c1 = mountWrapper.find('Card').first();
    const c1h3Text = c1.find('h3').text();
    const c1ulText = c1.find('ul').text();

    expect(c1h3Text).toEqual('COLORADO');
    expect(c1ulText).toEqual('2004: 0.242005: 0.2782006: 0.3372007: 0.3952008: 0.5362009: 0.5982010: 0.642011: 0.6722012: 0.6952013: 0.7032014: 0.741');

    const c2 = mountWrapper.find('Card').at(1);
    const c2h3Text = c2.find('h3').text();
    const c2ulext = c2.find('ul').text()

    expect(c2h3Text).toEqual('COLORADO SPRINGS 11');
    expect(c2ulext).toEqual('2004: 0.0692005: 0.5092006: 0.6382007: 0.9942008: 0.9922009: 12010: 0.9932011: 0.9942012: 0.9932013: 0.9892014: 0.994')
  });


});
