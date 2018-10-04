import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Card from '../../../src/Card';

describe('Card', () => {
  it.skip('should render one cardsContainer', () => {
    const wrapper = shallow(<Card />);    

    expect(wrapper).toMatchSnapshot();
  })

})
