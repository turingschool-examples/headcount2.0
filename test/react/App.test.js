import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../src/components/App';

describe('App', () => {
  it('renders element with class name app', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.find('.app').length).toEqual(1);
  });

  it('has 181 objects in state on load', () => {
    const wrapper = mount(<App/>);

    expect(Object.keys(wrapper.state().district).length).toEqual(181);
  })

  it('renders controls component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('Controls').length).toEqual(1);
  })

  it('renders 1 CardContainer component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('CardContainer').length).toEqual(1);
  })

  it('renders 181 elements with class cards', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('.card').length).toEqual(181);
  })

  it.skip('should update state to 1 object when Aspen 1 is entered', () => {
    const wrapper = mount(<App/>);
    const input = wrapper.find('.input');

    input.simulate('change', { target: {value: 'Aspen 1'}})
    expect(Object.keys(wrapper.state().district).length).toEqual(1);
  })

  it.skip('should update state to 2 objecs when Colorado is entered', () => {
    const wrapper = mount(<App/>);
    const input = wrapper.find('.input');

    input.simulate('change', { target: {value: 'colo'}})
    expect(Object.keys(wrapper.state().district).length).toEqual(2);
  })
})
