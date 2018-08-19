import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('SEARCH', () => {
  it('Should exist', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper).toBeDefined();
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should invoke updateCards onChange', () => {
    const updateCardsMock = jest.fn();
    const event = {target: {value: "colorado"}};
    const wrapper = shallow(<Search updateCards={updateCardsMock}/>);

    wrapper.find('input').simulate('change', event)
    expect(updateCardsMock).toHaveBeenCalled()
  })
})