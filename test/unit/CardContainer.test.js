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

    comparisonArray = [
      district.findByName('colorado'),
      district.findByName('colorado springs 11')];
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

  test(`should create an instance of CardContainer`, () => {
    expect(shallowWrapper.exists()).toEqual(true);
  });

  test(`should render an instance of card component and
  a surrounding section tag`, () => {
      const section = mountWrapper.find('section');
      const card1 = section.find('Card').first();
      const card2 = section.find('Card').at(1);
      expect(section.type()).toEqual('section');
      expect(card1.exists()).toEqual(true);
      expect(card2.exists()).toEqual(true);
    });

  test('should render and pass down correct information', () => {
    const c1 = mountWrapper.find('Card').first();
    const c1h3Text = c1.find('h3').text();
    const c1liFirstText = c1.find('li').at(0).text();
    const c1liLastText = c1.find('li').at(10).text();

    expect(c1h3Text).toEqual('COLORADO');
    expect(c1liFirstText).toEqual('2004: 0.24');
    expect(c1liLastText).toEqual('2014: 0.741');

    const c2 = mountWrapper.find('Card').at(1);
    const c2h3Text = c2.find('h3').text();
    const c2liFirstText = c2.find('li').at(0).text();
    const c2liLastText = c2.find('li').at(10).text();

    expect(c2h3Text).toEqual('COLORADO SPRINGS 11');
    expect(c2liFirstText).toEqual('2004: 0.069');
    expect(c2liLastText).toEqual('2014: 0.994');
  });


});
