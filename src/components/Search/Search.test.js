/* eslint-disable */
import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search Component', () => {

  it('should match the snapshot', () => {
    const renderedComp = shallow(<Search />);
    expect(renderedComp).toMatchSnapshot();
  });

  it('should update its state when handleInput is called', () => {
    const mock = jest.fn();
    const renderedComp = shallow(<Search handleSubmit={mock}/>);
    const event = {target: {value: 'colorado'}};
    renderedComp.instance().handleInput(event);
    expect(renderedComp.state().query).toEqual('colorado');
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