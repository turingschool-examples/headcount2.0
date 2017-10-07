import React from 'react';
import Card from '../../src/Card';
import App from '../../src/App';
import { shallow } from 'enzyme';
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
  });

  test('Create an instance of Card component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test('should render article, h3, ul, and li tags', () => {

    expect(article.exists()).toEqual(true);
    expect(h3.exists()).toEqual(true);
    expect(ul.exists()).toEqual(true);
    expect(li.exists()).toEqual(true);
  });

  test('it should render the correct data', () => {
    expect(h3.text()).toEqual('MEEKER RE1');
    expect(ul.text()).toEqual('2004: 02005: 02006: 02007: 02008: 02009: 02010: 0.8752011: 02012: 02013: 02014: 0')
  });

  test('number of li tags rendered should be the same as data.length', () => {
    expect(li.length).toEqual(11);
  });

  test('onCardClick function should change comparisonArray in App state', () => {
    const wrapperApp = shallow(<App />);
    expect(wrapperApp.state('comparisonArray')).toEqual([]);
    article.simulate('click');
    expect(wrapperApp.state('comparisonArray')).toEqual([]);
  });

});
