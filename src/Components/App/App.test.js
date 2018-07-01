import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state.matchingDistricts after componentDidMount runs', () => {
    const wrapper = shallow(<App />);
    const expectedState = 181;
    const actualState = wrapper.instance().state;
    expect(Object.keys(actualState.matchingDistricts).length).toEqual(expectedState);
    
 })
  it('findDistrict function is called it should return the corresponding objects', () => {
    const wrapper = mount(<App />);
  
    const mockInput = 'Colorado';
    wrapper.instance().findDistrict(mockInput);
    const actualState = wrapper.instance().state

    expect(Object.keys(actualState.matchingDistricts).length).toEqual(2);
  
  })

})


