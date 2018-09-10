import React from 'react';
import { shallow } from 'enzyme';

import HelperInfo from '../HelperInfo';

describe('Card', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<HelperInfo />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call toggleHelperInfo when "X" button is clicked', () => {
    const toggleHelperInfoMock = jest.fn();
    
    const wrapper = shallow(<HelperInfo toggleHelperInfo={toggleHelperInfoMock} />);

    wrapper.find('button').simulate('click');

    expect(toggleHelperInfoMock ).toHaveBeenCalled();
  });

});