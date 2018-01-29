/* eslint-disable */
import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search Component', () => {

  it('should match the snapshot', () => {
    const mock = jest.fn();
    const renderedComp = shallow(<Search handleSubmit={mock}/>);
    expect(renderedComp).toMatchSnapshot();
  });

  it('should fire of the submitHelper when entered or submitted', () => {
    const mock = jest.fn();
    const renderedComp = shallow(<Search handleSubmit={mock}/>);
    const event = {
      preventDefault() {},
      target: {value: 'colorado'}};
    renderedComp.instance().submitHelper(event);
    expect(mock).toBeCalled();
  });
});