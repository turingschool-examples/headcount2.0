import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from '../../Search';
import App from '../../App'


describe('Search', () =>  {

  it('calls  when title is changed', () => {
    const changeDataMock = jest.fn()
    let search = mount(<Search changeData={changeDataMock} />)
    // search.instance().forceUpdate()
    const mockEvent = { target: { value: 'string' } }

    search.find('input').simulate('change', mockEvent)

    

    expect(false).toEqual(true)
  })
})