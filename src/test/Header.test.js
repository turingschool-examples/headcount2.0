import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot()
  })

  it('should pass props through to Nav component', () => {
    const mockSearch = jest.fn()
    const wrapper = mount(<Header search={mockSearch}/>);
    expect(wrapper.find('Nav').props().search).toEqual(mockSearch)
  })
}) 