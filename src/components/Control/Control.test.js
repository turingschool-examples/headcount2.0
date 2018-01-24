import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Control from './Control';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Control handleSearch={()=>{}} />);
  expect(renderedComponent).toMatchSnapshot();
})

// it('should update state in app on change' () => {})
// Wouldn't this be an App test? if App is mounted, we can look inside Control