import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should populate state when componentDidMount', () => {
    expect(wrapper.state('locations')).not.toEqual({})
    expect(wrapper.state('cards')).toEqual([])
  })

  it('should update state with a card when selectLocation is called', () => {
    const expected = [{
      location: 'COLORADO', stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741,
      }
    }]

    wrapper.instance().selectLocation('COLORADO')

    expect(wrapper.state('cards')).toEqual(expected)
  });

  it('should remove card from cards array if selectedLocation is called and it is already in the array', () => {
    wrapper.instance().selectLocation('COLORADO')

    expect(wrapper.state('cards').length).toEqual(1)

    wrapper.instance().selectLocation('COLORADO')

    expect(wrapper.state('cards').length).toEqual(0)
  })

  it('should not update state with a card if the cards array already contains two cards', () => {
    wrapper.instance().selectLocation('COLORADO')

    expect(wrapper.state('cards').length).toEqual(1)

    wrapper.instance().selectLocation('ACADEMY 20')

    expect(wrapper.state('cards').length).toEqual(2)

    wrapper.instance().selectLocation('ADAMS COUNTY 14')

    expect(wrapper.state('cards').length).toEqual(2)
  })

  it('should render a LocationList component', () => {
    expect(wrapper.find('LocationList').length).toEqual(1);
  })

  it('should render a CardContainer component', () => {
    expect(wrapper.find('CardContainer').length).toEqual(1);
  })
})