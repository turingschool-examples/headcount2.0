import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Search from '../components/Search';

describe('Search component', () => {
  let wrapper;

  beforeEach(() => {
    shallow(<Search />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('should change the searchValue state on input change', () => {});
});
