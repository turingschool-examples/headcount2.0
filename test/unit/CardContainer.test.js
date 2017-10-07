import React from 'react';
import CardContainer from '../../src/CardContainer';
import Card from '../../src/Card';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer unit testing', () => {
  const district = new DistrictRepository(kinderData);
  let wrapper;
  let dataArray;
  let mockFunc;

  beforeEach(() => {
    mockFunc = () => {};
    dataArray = district.findAllMatches('colo');
    wrapper = mount(
      <CardContainer
        dataArray={dataArray}
        onCardClick={mockFunc} />);
  });

  test('should create an instance of CardContainer', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test('should render an instance of card component', () => {
    const section = wrapper.find('section');
    expect(section.find('Card').exists()).toEqual(true);
  });

  test('should render and pass down correct information', () => {
    const card = wrapper.find('Card').first();
    const h3Text = card.find('h3').text();
    const liText = card.find('ul').text();

    expect(h3Text).toEqual('COLORADO');
    expect(liText).toEqual('2004: 0.242005: 0.2782006: 0.3372007: 0.3952008: 0.5362009: 0.5982010: 0.642011: 0.6722012: 0.6952013: 0.7032014: 0.741')
  });
});
