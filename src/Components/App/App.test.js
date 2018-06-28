import React from 'react';
import ReactDOM from 'react-dom';
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

  it('should update state after componentDidMount runs', () => {
    const initialState = {};
    
 })
  it('findDistrict function should filter the state', () => {

  })

})

