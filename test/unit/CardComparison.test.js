import React from 'react';
import CardContainer from '../../src/CardContainer';
import CardComparison from '../../src/CardComparison';
import Card from '../../src/Card';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardComparison unit testing', () => {
  const district = new DistrictRepository(kinderData);
  let shallowWrapper;
  let mockFunc;
  let comparisonArray;
  let mountWrapper;

  beforeEach(() => {
    mockFunc = () => {};
    comparisonArray = [district.findByName('aspen 1'), district.findByName('bennett 29j')]
    shallowWrapper = shallow(
      <CardComparison
        onCardClick={mockFunc}
        comparisonArray={comparisonArray} />);
    mountWrapper = mount(
      <CardComparison
        onCardClick={mockFunc}
        comparisonArray={comparisonArray} />);
  });

test('should create an instance of CardComparison', () => {
    expect(shallowWrapper.exists()).toEqual(true);
});

test('CardComparison component should render an instance of Card', () => {
    const aspenCard = shallowWrapper.find('Card').first();
    const bennettCard = shallowWrapper.find('Card').at(1);

    expect(aspenCard.exists()).toEqual(true);
    expect(bennettCard.exists()).toEqual(true);
});

test('should render correct information', () => {

    const aspenArticle = mountWrapper.find('Card').first().find('article');
    const h3 = aspenArticle.find('h3').text();
    const ul = aspenArticle.find('ul').text();

    expect(h3).toEqual('ASPEN 1');
    expect(ul).toEqual('2004: 12005: 12006: 12007: 12008: 12009: 12010: 12011: 12012: 12013: 12014: 0.992');
});

test('should render with correct className, index 0 blue, index 1 green ', () => {
    const index0Card = mountWrapper.find('Card').first().find('article');
    const index1Card = mountWrapper.find('Card').at(1).find('article');

    expect(index0Card).toHaveProperty('hello');

});

});
