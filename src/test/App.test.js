import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should populate the category object in state when the component mounts', () => {
    expect(wrapper.state().category).not.toEqual({});
  });

  it('should have 181 stats in category.stats state', () => {
    expect(Object.keys(wrapper.state().category.stats).length).toEqual(181);
  });

  it('should set loading state to false when component mounts', () => {
    expect(wrapper.state().loading).toEqual(false);
  });

  it('should render the DistrictContainer component', () => {
    expect(wrapper.find('DistrictContainer').length).toEqual(1);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
