import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Control
    handleSearch={()=>{}} 
    searchError={false} />);
  expect(renderedComponent).toMatchSnapshot();
});