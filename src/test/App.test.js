import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render all components', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
