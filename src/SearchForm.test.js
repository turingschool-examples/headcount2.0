import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow, mount} from 'enzyme';

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm />)
  })

  it.skip('matches the snapshot', () => {
    // Execution && Expectation
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call the function on input change', () => {
    wrapper.instance().
    expect(searchSchoolMock.mock.calls.length).toBe(1)
  })

  it.skip('updates state when searchSchool is called', () => {
    // Setup
    const mockEvent = { target: { name: 'title', value: 'something' } }

    // Execution
    wrapper.instance().handleInputChange(mockEvent)

    // Expectation
    expect(wrapper.state('title')).toBe('something')
  })

})