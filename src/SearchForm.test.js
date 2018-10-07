import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow, mount } from 'enzyme';

describe('SearchForm', () => {
  let wrapper;
  let filterDataMock;
  let displayAllMock;
  let mockData;

  beforeEach(() => {
    filterDataMock = jest.fn()
    displayAllMock = jest.fn()
    mockData = [{location: 'denver', stats: [{2001: 2}]},
                      {location: 'boulder', stats: [{2002: 1}]}]
    wrapper = shallow(<SearchForm 
                        filterData={filterDataMock} 
                        displayAll={displayAllMock} 
                        data={mockData} />)
  })

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call updateSearch when a search input is entered', () => {
    wrapper = mount(<SearchForm 
                        filterData={filterDataMock} 
                        displayAll={displayAllMock} 
                        data={mockData} />)
    //watches the invokation of the method
    const spy = spyOn(wrapper.instance(), 'updateSearch');
    wrapper.instance().forceUpdate();
    const mockEvent = { target: {value: 'userinput' } }
    //simulate's a change event and provides the mockEvent object
    wrapper.find('.input-search').simulate('change', mockEvent);
    //on change invokes function, so watch that it was invoked
    expect(spy).toHaveBeenCalled();
  })

  it('should update state when updateSearch is called', () => {
    const mockEvent = { target: { name: 'search', value: 'userinput' } }

    wrapper.instance().updateSearch(mockEvent);
    expect(wrapper.state('search')).toBe('userinput');
  })

  it('should call filterData when updateSearch is called', () => {
    const mockEvent = { target: { name: 'search', value: 'userinput' } }
    wrapper.instance().updateSearch(mockEvent)
    expect(filterDataMock).toHaveBeenCalled()
  })

  it('should call handleSubmit when the search form is submitted', () => {
    wrapper = mount(<SearchForm 
                        filterData={filterDataMock} 
                        displayAll={displayAllMock} 
                        data={mockData} />)
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate();

    wrapper.find('.search').simulate('submit', mockEvent);

    expect(spy).toHaveBeenCalled();
  })

  it('should call filterData when handleSubmit is called', () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().handleSubmit(mockEvent)
    expect(filterDataMock).toHaveBeenCalled()
  })

  it('should update state when handleSubmit is called', () => {
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.state('search')).toBe('');
  })

  it('should call displayAll when display-all button is clicked', () => {
    wrapper.find('.btn-display-all').simulate('click')
    expect(displayAllMock).toHaveBeenCalled()
  })
})




























