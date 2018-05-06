import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from '../../Search';


describe('Search', () =>  {

  it('calls  when title is changed', () => {
    const changeDataMock = jest.fn()
    const search = mount(<Search changeData={changeDataMock} />)
    const searchInstance = search.instance()
    console.log(searchInstance)
    const spy = spyOn(search, 'changeData')
    search.instance().forceUpdate()
    const mockEvent = { target: { value: 'something' } }

    search.find('input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })
})