import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from '../../SearchField';
import { shallow, mount } from 'enzyme';

describe('SearchField component', ()=>{
  let wrapper;
  let mockSearchSchools;

  beforeEach('', ()=>{
    wrapper = shallow(<SearchField />);
    mockSearchSchools = jest.fn();
  });

  it('should match snapshot',()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('calls searchSchools when user inputs letters', () => {
    wrapper = mount(<SearchField searchSchools={mockSearchSchools}/>);
    const spy = spyOn(wrapper.instance(), 'handleSearch');
    wrapper.instance().forceUpdate();
    const mockEvent = {target: {value: 'as'}};
    wrapper.find('.user-input').simulate('change', mockEvent);

    expect(spy).toHaveBeenCalled();
  });

  it('updates state when handleSearch is called', () => {
    
    const mockEvent = {target: {value: 'l'}};
    wrapper.instance().handleSearch(mockEvent)

    expect(wrapper.state('inputValue')).toBe(mockEvent)

  });

});

