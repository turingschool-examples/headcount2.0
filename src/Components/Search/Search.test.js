import React from 'react';
import Search from './Search';
import { mount } from 'enzyme';

describe('Search', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<Search 
      submitSearch={jest.fn()}
      />)
    })
    
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    
    it('should call submitSearch on change', () => {
    const event = { target: { value: 'abc' } };
    const expectedState = {
      search: 'abc'
    };

    wrapper.instance().handleChange(event);
    expect(wrapper.state()).toEqual(expectedState);
  });
})