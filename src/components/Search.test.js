import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import {shallow, mount} from 'enzyme';

describe('Search', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should have an initial state of user input', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.state().userInput).toEqual("");
  });

  it('should update the state when user inputs a string', () => {
    const wrapper = mount(<Search />)
    const event = {target: {value: 'abc'}};
    const expectedState = {
      userInput: 'abc'
    };

    wrapper.instance().handleChange(event);
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('calls the setLocation prop on submit and sets the userInput back to an empty string', () => {
    
    const mockEvent = {preventDefault: () => {}}

    const wrapper = shallow(<Search setLocationData={jest.fn()} />)
    const expectedState = {
      userInput: ""
    };

    wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.state()).toEqual(expectedState);

  }); 
});
