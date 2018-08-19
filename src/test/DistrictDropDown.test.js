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

});