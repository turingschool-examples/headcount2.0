import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Card from '../../../src/Card';

describe('Card', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Card location={''} stats={{}}/>);    

    expect(wrapper).toMatchSnapshot();
  })

})
