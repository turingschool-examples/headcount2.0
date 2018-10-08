import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Search from '../Search/Search';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Search', () =>  {

  const mockData = {
      district: 'ADAMS'
    }

  const district = new DistrictRepository(kinderData);

  const handleInput = jest.fn();

  it('should match the snapshot', () => {

    const wrapper = shallow(<Search {...mockData} searchData={handleInput}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state once input is handled', () => {

    const wrapper = shallow(<Search {...mockData} searchData={handleInput}/>);

    const mockEvent = {target: { value: 'ADAMS', name: 'district'} };

    const expectedState = { district: 'ADAMS' }
    
    wrapper.instance().handleInput(mockEvent);

    handleInput(mockEvent);

    expect(handleInput).toBeCalled();

    expect(wrapper.state()).toEqual(expectedState);

  });

});
