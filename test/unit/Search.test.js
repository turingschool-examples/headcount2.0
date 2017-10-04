// when entering text into search bar, it should update state
// simple tests such as it should be defined
// it should render text input field
// call a function in app on input change
import React from 'react';
import Search from '../../src/Search';
import { shallow, mount } from 'enzyme';



describe('Search Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('updates state.input when a user types in to the search', () => {
    
  });
});
