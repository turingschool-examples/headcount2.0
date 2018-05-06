import React from 'react';
import Search from '../Search/Search.js';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Search  /> ) ;
  });

  it('should match the snapshot', () => {
    expect(Search).toMatchSnapshot();
  });

  it('should change the state of userInput', () => {
    const mockEvent = { target: { value: 'erix'}};
    const expectedState = { userInput: 'erix'};
    
    wrapper.instance().updateUserInput( mockEvent );
    expect(wrapper.state()).toEqual( expectedState );
  });


  it('should call searchFilter when updateFilterInfo is called', () => {
    const mockEvent = { target: { value: 'd' }};
    const searchFilter = jest.fn();
    wrapper = shallow(<Search searchFilter={searchFilter} />); 
    
    wrapper.instance().updateFilterInfo( mockEvent ); 
    expect(searchFilter).toHaveBeenCalled();
  });

});