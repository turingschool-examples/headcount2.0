import React from 'react';
import { shallow } from 'enzyme';
import ControlledForm from './ControlledForm'

describe('ControlledForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ControlledForm />);
    expect(wrapper).toMatchSnapshot();
  })
})