import React from 'react';
import { shallow } from 'enzyme';

import Search from '../Search';

describe('Search', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Search />);
  });

  it('should call handleInput whenever input changes', () => {
    const searchLocationMock = jest.fn();
    const mockEvent = { target: { value: 'col' } };
    wrapper = shallow(<Search searchLocations={searchLocationMock} />);
    const handleInput = jest.spyOn(wrapper.instance(), 'handleInput');  

    wrapper.instance().forceUpdate();
    wrapper.find('input').simulate('change', mockEvent);

    expect(handleInput).toHaveBeenCalled();
  });

  it('should update value in state and call searchLocations when handleInput is called', () => {
    const searchLocationMock = jest.fn();
    const mockEvent = { target: { value: 'col' } };

    wrapper = shallow(<Search searchLocations={searchLocationMock} />);
    
    wrapper.instance().handleInput(mockEvent);

    expect(searchLocationMock).toHaveBeenCalled();
  });

  it('should clear input by updating state when clearSearch is called', () => {
    wrapper.setState({ value: 'col'})

    expect(wrapper.state('value')).toEqual('col');

    wrapper.instance().clearSearch();

    expect(wrapper.state('value')).toEqual('');
  });

  it('should render a LocationList component', () => {
    expect(wrapper.find('LocationList').length).toEqual(1);
  });

});