import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictList from './DistrictList';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';

describe('DistrictList', () => {
  let wrapper;
  const mockFn = jest.fn();
  const mockArray = ['COLORADO', 'COLORADO SPRINGS 11'];
  const allDistricts = new DistrictRepository(kinderData);
  const mockCards = [{location: 'COLORADO', stats:{2007: 3232}}, {location: 'COLORADO SPRINGS', stats:{2005: 3903}}]

  beforeEach(() => {
    wrapper = shallow(<DistrictList addToCompare={mockFn} cardsToCompare={[]} districts={allDistricts} searchedDistrict={[]} comparedObject={{}} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is length in the searchedDistrict array', () => {
    wrapper = shallow(<DistrictList addToCompare={mockFn} cardsToCompare={mockCards} districts={{ allDistricts }} searchedDistrict={[]} comparedObject={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
