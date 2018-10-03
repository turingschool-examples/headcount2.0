import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../../../src/App';

describe('App', () => {
  it('should render one cardsContainer', () => {
    const wrapper = shallow(<App />);    

    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should have default state', () => {
    const wrapper = shallow(<App />);    
    const expected = { schoolData: [] };

    expect(wrapper.state('schoolData')).toEqual([]);

  })

})
