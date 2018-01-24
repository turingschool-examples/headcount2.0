import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  shallow(<App />);
});