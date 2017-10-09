import React from 'react';
import Card from '../../src/Card';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Card component', () => {
  const district = new DistrictRepository(kinderData);
  let mockFunc;
  let districtName;
  let districtObject;
  let wrapper;
  let article;
  let h3;
  let ul;
  let li;
  let liFirst;
  let liLast;

  beforeEach(() => {
    mockFunc = () => {};
    districtName = district.findByName('meeker re1').location;
    districtObject = district.findByName('meeker re1').data;
    wrapper = shallow(
      <Card
        districtName={districtName}
        districtObject={districtObject}
        onCardClick={mockFunc} />);
    article = wrapper.find('article');
    h3 = article.find('h3');
    ul = article.find('ul');
    li = ul.find('li');
    liFirst = ul.find('li').at(0);
    liLast = ul.find('li').at(10);
  });

  test('Create an instance of Card component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test('should render article, h3, ul, and li tags', () => {
    expect(article.type()).toEqual('article');
    expect(h3.type()).toEqual('h3');
    expect(ul.type()).toEqual('ul');
    expect(liFirst.type()).toEqual('li');
  });

  test('it should render the correct data', () => {
    expect(h3.text()).toEqual('MEEKER RE1');
    expect(liFirst.text()).toEqual('2004: 0');
    expect(liLast.text()).toEqual('2014: 0');
  });

  test('number of li tags rendered should be the same as data.length', () => {
    expect(li.length).toEqual(11);
  });

  test('li tag should have red class if num < 0.5, blue if num >= 0.5', () => {
    const li1 = wrapper.find('li').first();
    const li6 = wrapper.find('li').at(6);
    const li1text = wrapper.find('li').first().text();
    const li6text = wrapper.find('li').at(6).text();

    expect(li1text).toEqual('2004: 0');
    expect(li1.hasClass('red')).toEqual(true);

    expect(li6text).toEqual('2010: 0.875');
    expect(li6.hasClass('blue')).toEqual(true);
  });
});
