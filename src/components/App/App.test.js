import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'App', () => {
  test('renders without crashing', () => {

    const renderedComp = shallow(<App />);

    expect(renderedComp).toMatchSnapshot();
  });
})

// starts with a state of all of the things

// should update state if we filter for certain things

// should select two cards and render a comparison