import React from 'react';
import ComparisonCard from '../../src/ComparisonCard';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('ComparisonCard componet unit testing', () => {
  const district = new DistrictRepository(kinderData);
  let shallowWrapper;
  let mountWrapper;
  let comparisonArray;
  let props;

  beforeEach(() => {
    comparisonArray = [
      district.compareDistrictAverages('aspen 1', 'bennett 29j')
    ];

    props = Object.keys(comparisonArray[0]);

    shallowWrapper = shallow(
      <ComparisonCard
        locationOne={props[0]}
        locationTwo={props[1]}
        averageOne={comparisonArray[0][props[0]]}
        averageTwo={comparisonArray[0][props[1]]}
        comparisonData={comparisonArray[0].compared} />
    );

    mountWrapper = mount(
      <ComparisonCard
        locationOne={props[0]}
        locationTwo={props[1]}
        averageOne={comparisonArray[0][props[0]]}
        averageTwo={comparisonArray[0][props[1]]}
        comparisonData={comparisonArray[0].compared} />
    );
  });

  test('should create an instance of ComparisonCard', () => {
    expect(shallowWrapper.exists()).toEqual(true);
  });

  test('should render h3 tags for locations, h4 for averages, h2 for compared, wrapped in an article tag', () => {
    const article = mountWrapper.find('article');
    const firsth3 = article.find('h3').first();
    const secondh3 = article.find('h3').at(1);
    const firsth4 = article.find('h4').first();
    const secondh4 = article.find('h4').at(1);
    const h2 = article.find('h2');

    expect(article.type()).toEqual('article');
    expect(firsth3.type()).toEqual('h3');
    expect(secondh3.type()).toEqual('h3');
    expect(firsth4.type()).toEqual('h4');
    expect(secondh4.type()).toEqual('h4');
    expect(h2.type()).toEqual('h2');
  });

  test('expect to render correct information', () => {
    const firsth3 = mountWrapper.find('h3').first().text();
    const secondh3 = mountWrapper.find('h3').at(1).text();
    const firsth4 = mountWrapper.find('h4').first().text();
    const secondh4 = mountWrapper.find('h4').at(1).text();
    const h2 = mountWrapper.find('h2').text();

    expect(firsth3).toEqual('ASPEN 1');
    expect(secondh3).toEqual('BENNETT 29J');
    expect(firsth4).toEqual('0.999');
    expect(secondh4).toEqual('0.182');
    expect(h2).toEqual('0.182');
  });

});
