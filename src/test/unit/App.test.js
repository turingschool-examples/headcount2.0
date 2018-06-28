import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App/App';
import CardContainer from '../../components/CardContainer/CardContainer';

describe('App unit test suite', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  afterEach(() => wrapper.unmount());

  test('should have a default state properties', () => {
    const defaultState = {
      districts: []
    };
    expect(wrapper.state()).toEqual(defaultState);
  });

  test('it should update state when getSchoolDistrictData is invoked', () => {
    expect(wrapper.state('districts').length).toBe(0);
    wrapper.instance().getSchoolDistrictData();
    expect(wrapper.state('districts').length).toBe(181);
  });

  test('should render children components', () => {
    const cardContainer = wrapper.find(CardContainer).length;
    expect(cardContainer).toBe(1);
  });

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

