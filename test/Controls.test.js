import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Controls } from '../src/Controls';


describe ('Controls', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Controls />, div);
  });

  it('should have an input field', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('input').length).toEqual(1);
  });

  it('input field should have a class of input-field', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('input').hasClass('input-field')).toEqual(true);
  })

})
