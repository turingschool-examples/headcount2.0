import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../components/Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const info = {location: 'Denver', stats: {'2006': .85 }};
    const wrapper = shallow(<Card info={info} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct props', () => {
    const info = {location: 'Denver', stats: {'2006': .85 }};
    const wrapper = mount(<Card info={info} />);
    expect(wrapper.props().info.location).toEqual('Denver');
    expect(wrapper.props().info.stats['2006']).toEqual(.85);
  });

  it('should have over-fifty class if stats.year is >= .50', () => {
    const info1 = {location: 'Denver', stats: {'2006': .85 }};
    const info2 = {location: 'Aspen', stats: {'2006': .15 }};
    const wrapper1 = mount(<Card info={info1} />);
    const wrapper2 = mount(<Card info={info2} />);
    expect(wrapper1.find('li').props().className).toEqual('over-fifty');
    expect(wrapper2.find('li').props().className).toEqual('under-fifty');  
  });
});