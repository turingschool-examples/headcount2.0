import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App/App';
import CardContainer from '../../components/CardContainer/CardContainer';
import Search from '../../components/Search/Search';

describe('App unit test suite', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  afterEach(() => wrapper.unmount());

  test('should have a default state properties', () => {
    const defaultState = {
      districts: [],
      comparedDistricts: []
    };
    expect(wrapper.state()).toEqual(defaultState);
  });

  test('should call invoke getSchoolDistrictData on mount', () => {
    const spy = spyOn(wrapper.instance(), 'getSchoolDistrictData');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  test('it should update state when getSchoolDistrictData is invoked', () => {
    expect(wrapper.state('districts').length).toBe(0);
    wrapper.instance().getSchoolDistrictData();
    expect(wrapper.state('districts').length).toBe(181);
  });

  test('it should filter districts when filterDistricts is invoked', () => {
    wrapper.instance().getSchoolDistrictData();
    expect(wrapper.state('districts').length).toBe(181);
    wrapper.instance().filterDistricts('Color');
    expect(wrapper.state('districts').length).toBe(2);
  });

  test('it should reset districts when a no query is passed to filterDistricts', () => {
    wrapper.instance().getSchoolDistrictData();
    wrapper.instance().filterDistricts('');
    expect(wrapper.state('districts').length).toBe(181);
  });

  test('it if no matches present filterSchools should not display cards ', () => {
    wrapper.instance().getSchoolDistrictData();
    wrapper.instance().filterDistricts('adkfljl');
    expect(wrapper.state('districts').length).toBe(0);
  });

  test('should have been called with a parameter', () => {
    const spy = spyOn(wrapper.instance(), 'filterDistricts');
    wrapper.instance().filterDistricts('Colo');
    expect(spy).toHaveBeenCalledWith('Colo');
  });

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render children components when getSchoolDistricts is invoked', () => {
    wrapper.instance().getSchoolDistrictData();
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot when filterDistricts in invoked', () => {
    wrapper.instance().filterDistricts('Colo');
    expect(wrapper).toMatchSnapshot();
  });
  
});
