import React from 'react';
import { shallow } from 'enzyme';

import DistrictDropDown from '../DistrictDropDown';

describe('Card', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<DistrictDropDown />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call toggleDropDown when header is clicked', () => {
    const toggleDropDownMock = jest.fn();
    
    const wrapper = shallow(<DistrictDropDown toggleDropDown={toggleDropDownMock} />);

    wrapper.find('h1').simulate('click');

    expect(toggleDropDownMock ).toHaveBeenCalled();
  });

  it('should call toggleDropDown when list is clicked', () => {
    const toggleDropDownMock = jest.fn();
    const wrapper = shallow(<DistrictDropDown toggleDropDown={toggleDropDownMock} />);

    wrapper.find('ul').simulate('click');

    expect(toggleDropDownMock ).toHaveBeenCalled();
  });

  it('should call handleSelection when list item is clicked', () => {
    const changeDistricDataMock = jest.fn();
    const mockEvent = { target: { id: 'KINDERGARTNERS IN FULL DAY PROGRAM' } };
    const wrapper = shallow(<DistrictDropDown changeDistrictData={changeDistricDataMock} />);

    const handleSelection = jest.spyOn(wrapper.instance(), 'handleSelection');  

    wrapper.instance().forceUpdate();
    wrapper.find('ul').childAt(0).simulate('click', mockEvent);

    expect(handleSelection).toHaveBeenCalled();
  });

  it('handleSelection should update state and call changeDistricData', () => {
    const changeDistricDataMock = jest.fn();
    const mockEvent = { target: { id: 'EIGTH GRADE TEST SCORES' } };
    const wrapper = shallow(<DistrictDropDown changeDistrictData={changeDistricDataMock} />);
    
    expect(wrapper.instance().state.location).toEqual('KINDERGARTNERS IN FULL DAY PROGRAM');
    wrapper.instance().handleSelection(mockEvent);
    
    expect(wrapper.instance().state.location).toEqual('EIGTH GRADE TEST SCORES');
    expect(changeDistricDataMock).toHaveBeenCalled();
  });

});