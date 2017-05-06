import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../src/App';


describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders a Welcome note in the <h2> tags', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome To Headcount 2.0</h2>;

    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('should have a component called CardsDisplay', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('CardsDisplay').length).toEqual(1)
  });

  it('should render a Controls component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.controls-container').length).toEqual(1)
  });

});
