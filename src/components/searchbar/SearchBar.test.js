/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('SearchBar Component', () => {

  test('it should render without crashing', () => {
    
    const filterCards = () => 'hello';
    const renderedComp = (<SearchBar filterCards={filterCards} />);

    expect(renderedComp).toMatchSnapshot();

  })
  
  test('it should update the input value based on state (and vice versa)', () => {

    const filterCards = () => 'hello';
    const renderedComp = shallow(<SearchBar filterCards={filterCards} />)

    expect(renderedComp.find('.search-bar').props().value).toBe('')

    renderedComp.setState({value: 'Colorado'});
    expect(renderedComp.state().value).toBe('Colorado');

    expect(renderedComp.find('.search-bar').props().value).toBe('Colorado')

  });
})
