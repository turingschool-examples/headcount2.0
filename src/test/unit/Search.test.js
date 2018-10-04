import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Search from '../../../src/Search';

describe('Search', () => {
  it('should render a search input', () => {
    const wrapper = shallow(<Search />);    

    expect(wrapper).toMatchSnapshot();
  })

  it('should call searchSchoolData when input is altered', () => {
    const mockSearchSchoolData = jest.fn();
    const wrapper = shallow(<Search searchSchoolData={mockSearchSchoolData} />);
    const expectedResult = {value: 'a'};
    const mockEvent = {target: { value: 'a'} };

    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedResult)
  })

})
