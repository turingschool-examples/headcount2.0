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

  it.skip('should update state.matchingDistricts after componentDidMount runs', () => {
    const wrapper = shallow(<App />);
    const initialState = {};
    const mockMount = jest.fn()
    const mockState = { COLORADO: 
                             { stats: 
                                { 2004: 0.24,
                                  2005: 0.278,
                                  2006: 0.337,
                                  2007: 0.395,
                                  2008: 0.536,
                                  2009: 0.598,
                                  2010: 0.64,
                                  2011: 0.672,
                                  2012: 0.695,
                                  2013: 0.703,
                                  2014: 0.741 },
                               location: 'COLORADO' }
                              }
    // wrapper.instance().mockMount;
    wrapper.setState({ mockState })
    const expectedState = { COLORADO: 
                             { stats: 
                                { 2004: 0.24,
                                  2005: 0.278,
                                  2006: 0.337,
                                  2007: 0.395,
                                  2008: 0.536,
                                  2009: 0.598,
                                  2010: 0.64,
                                  2011: 0.672,
                                  2012: 0.695,
                                  2013: 0.703,
                                  2014: 0.741 },
                               location: 'COLORADO' }
                              }
  const actualState = wrapper.instance().state
  expect(actualState).toEqual(expectedState);
    
 })
  it.only('findDistrict function should be called with the correct props', () => {
    const wrapper = shallow(<App />);
    const findDistrictMock = jest.fn();
    const mockInput = 'Colorado';
    const mockEvent = { event: mockInput }
    console.log(findDistrictMock)
    wrapper.instance().findDistrictMock()

    expect(findDistrictMock).toBeCalledWith(mockInput);
  
  })

//   describe('<Gallery />', () => {
//   it('Expect sendMessageToParentWindow to be called on image change', () => {
//     const sendEventToParentWindowMock = jest.fn();
//     const onChangeImageMock = jest.fn(() => {
//          sendEventToParentWindowMock();
//     });

//     const gallery = shallow(<Gallery images={imagesMockData} onChange={onChangeImageMock} />); // Passing the mocked onChangeImage as prop
//     gallery.find('input#image-1').simulate('change');

//     expect(sendEventToParentWindowMock).toBeCalled();
//   });
// }

})


