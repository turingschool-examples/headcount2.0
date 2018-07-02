import React from 'react';
import { shallow, mount } from 'enzyme';
import ControlledForm from './ControlledForm'

describe('ControlledForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ControlledForm />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should call findDistrict prop function with the proper arguments', () => {
    const mockChange = jest.fn();
    const wrapper = mount(<ControlledForm findDistrict={mockChange}/>);

    const mockEvent = { target: {value:'COLORADO'}};
   
    wrapper.instance().handleChange(mockEvent);
    expect(mockChange).toBeCalledWith('COLORADO');

  })
})