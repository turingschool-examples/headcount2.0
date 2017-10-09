import React from 'react';
import ComparisonContainer from '../../src/ComparisonContainer';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('ComparisonContainer unit testing', () => {
  const district = new DistrictRepository(kinderData);
  let shallowWrapper;
  let mockFunc;
  let comparisonArray;
  let mountWrapper;
  let comparisonCardArray;

  beforeEach(() => {
    mockFunc = () => {};

    comparisonArray = [
      district.findByName('aspen 1'),
      district.findByName('bennett 29j')];

    comparisonCardArray = [
      district.compareDistrictAverages('aspen 1', 'bennett 29j')];

    shallowWrapper = shallow(
      <ComparisonContainer
        onCardClick={mockFunc}
        comparisonArray={comparisonArray}
        comparisonCardArray={comparisonCardArray} />);

    mountWrapper = mount(
      <ComparisonContainer
        onCardClick={mockFunc}
        comparisonArray={comparisonArray}
        comparisonCardArray={comparisonCardArray} />);
  });

  test('should create an instance of ComparisonContainer', () => {
    expect(shallowWrapper.exists()).toEqual(true);
  });

  test('ComparisonContainer component should render an instance of Card',
    () => {
      const aspenCard = shallowWrapper.find('Card').first();
      const bennettCard = shallowWrapper.find('Card').at(1);

      expect(aspenCard.exists()).toEqual(true);
      expect(bennettCard.exists()).toEqual(true);
    });

  test(`ComparisonContainer component should render an instance
  of ComparisonCard`, () => {
      const comparisonCard = shallowWrapper.find('ComparisonCard');

      expect(comparisonCard.exists()).toEqual(true);
    });

  test('should render correct information on instance of Card component',
    () => {

      const aspenArticle = mountWrapper.find('Card').first().find('article');
      const h3 = aspenArticle.find('h3').text();
      const ul = aspenArticle.find('ul').text();

      expect(h3).toEqual('ASPEN 1');
      expect(ul).toEqual(`2004: 12005: 12006: 12007: 12008: 12009: 12010: 12011: 12012: 12013: 12014: 0.992`);
    });

  test(`should render correct information on instance
  of ComparisonCard component`, () => {
      const comparisonCard = mountWrapper.find('ComparisonCard');
      const firsth3 = comparisonCard.find('h3').first().text();
      const firsth4 = comparisonCard.find('h4').first().text();
      const h2 = comparisonCard.find('h2').text();
      const secondh3 = comparisonCard.find('h3').at(1).text();
      const secondh4 = comparisonCard.find('h4').at(1).text();

      expect(firsth3).toEqual('ASPEN 1');
      expect(firsth4).toEqual('0.999');
      expect(h2).toEqual('0.182');
      expect(secondh3).toEqual('BENNETT 29J');
      expect(secondh4).toEqual('0.182');
    });

  test(`should render with correct className,
      index 0 blue-border, index 1 green-border`, () => {
      const index0Card = mountWrapper.find('Card').first().find('article');
      const index1Card = mountWrapper.find('Card').at(1).find('article');

      expect(index0Card.hasClass('blue-border')).toEqual(true);
      expect(index1Card.hasClass('green-border')).toEqual(true);
    });

});
