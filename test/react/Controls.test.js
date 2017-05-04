import React from 'react';
import { shallow, mount} from 'enzyme';
import Controls from '../../src/components/Controls';

describe('Controls Test', () => {
  it('should update state.location on onChange ', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Controls handleSubmit={() => { mock }} handleAutoComplete={() => { mock }}/>);
    const input = wrapper.find('input[type="text"]');
    const button = wrapper.find('input[type="submit"]');

    input.simulate('change', {target: {value: 'Colorado'}});
    expect(wrapper.state('location')).toEqual('Colorado');
  })

  it('should update state.location on onChange ', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Controls handleSubmit={() => { mock }} handleAutoComplete={() => { mock }}/>);
    const input = wrapper.find('input[type="text"]');
    const button = wrapper.find('input[type="submit"]');

    input.simulate('change', {target: {value: 'Colorado'}});

    button.simulate('click');
    expect(wrapper.state('location')).toEqual('');
  })
})
