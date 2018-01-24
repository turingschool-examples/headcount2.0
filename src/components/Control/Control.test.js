import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Control handleSearch={()=>{}} />);
  expect(renderedComponent).toMatchSnapshot();
});

// it('should update state in app on change' () => {})
// Wouldn't this be an App test? if App is mounted, we can look inside Control