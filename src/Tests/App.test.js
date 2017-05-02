import React from 'react';
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom';
import App from '../Components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<App />)
  // ReactDOM.render(<App />, div);
});
