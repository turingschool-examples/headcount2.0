import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictList from './DistrictList';

describe('DistrictList', () => {

  let wrapper;
  let mockFn = jest.fn();
  let mockArray = [ 'COLORADO', 'COLORADO SPRINGS 11' ];

  beforeEach(() => {
    wrapper = shallow(<DistrictList addToCompare={mockFn} cardsToCompare={[]} districts={{}} searchedDistrict={[]} comparedObject={{}}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when there is length in the searchedDistrict array', () => {
    wrapper = shallow(<DistrictList addToCompare={mockFn} cardsToCompare={[]} districts={{}} searchedDistrict={mockArray} comparedObject={{}}/>)
    expect(wrapper).toMatchSnapshot();
  })
})