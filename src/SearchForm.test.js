import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    let searchSchool = jest.fn();
    wrapper = shallow(<SearchForm searchSchool={searchSchool}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it.skip('should call handleSearch on keyUp', () => {
  //   const event = new Event('keyUp', {"input":{"value":8}})
  //   wrapper.find('input').simulate('keyUp', { preventDefault() {} });
  //   const input = wrapper.find('input');
  //   input.value = 'test';
  //   input.simulate('keyUp', {keyCode: 40});
  //   expect(searchSchool.called).to.be.true;
  // });

  it.skip('updates state when searchSchool is called', () => {
    const mockEvent = { target: { value: 'something' } };
    wrapper.find('input').simulate('keyUp', { preventDefault() {} });
    wrapper.instance().handleSearch(mockEvent);

    expect(wrapper.state('title')).toBe('something');
  });

});