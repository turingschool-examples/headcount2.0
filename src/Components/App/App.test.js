import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper';
import data from '../../data/kindergartners_in_full_day_program';

describe('App', () => {

  let wrapper;
  let mockDistricts;
  
  beforeEach(() => {
    mockDistricts = new DistrictRepository(data);
    wrapper = shallow(<App
                        districts={mockDistricts}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

