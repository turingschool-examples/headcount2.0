import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from '../App';

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should populate state when componentDidMount', () => {
    expect(wrapper.state('locations')).not.toEqual({});
    expect(wrapper.state('displayedLocations')).not.toEqual([]);
  });

  it('should update state with a card when selectLocation is called', () => {
    const expected = [{
      average: 0.53,
      location: 'COLORADO',
      stats: {
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
    }];

    wrapper.instance().selectLocation('COLORADO');

    expect(wrapper.state('cards')).toEqual(expected);
  });

  it('should reset displayedLocations when selectLocation is called', () => {
    expect(wrapper.state('displayedLocations').length).toEqual(181);
    
    wrapper.instance().searchLocations('COLORADO');
    expect(wrapper.state('displayedLocations').length).toEqual(2);

    wrapper.instance().selectLocation('ACADEMY 20');
    expect(wrapper.state('displayedLocations').length).toEqual(181);
  });

  it('should remove card from cards array if selectedLocation is called and it is already in the array', () => {
    wrapper.instance().selectLocation('COLORADO');
    expect(wrapper.state('cards').length).toEqual(1);

    wrapper.instance().selectLocation('COLORADO');
    expect(wrapper.state('cards').length).toEqual(0);
  });

  it('if two cards are displayed and a third card is selected, it should remove previous cards and update state with most recent card that is selected', () => {
    wrapper.instance().selectLocation('COLORADO');
    expect(wrapper.state('cards').length).toEqual(1);

    wrapper.instance().selectLocation('ACADEMY 20');
    expect(wrapper.state('cards').length).toEqual(2);

    wrapper.instance().selectLocation('ADAMS COUNTY 14');
    expect(wrapper.state('cards').length).toEqual(1);
  });

  it('when searchLocations is called it should update displayedLocations in state', () => {
    const value = 'COLORADO';

    expect(wrapper.state('displayedLocations').length).toEqual(181);
    
    wrapper.instance().searchLocations(value);

    expect(wrapper.state('displayedLocations')).toEqual(['COLORADO', 'COLORADO SPRINGS 11']);
  });

  it('should update state with averages when compareAverages is called', () => {
    const cards = [{
      location: 'COLORADO',
      stats: {
        '2004': 0.24,
        '2005': 0.278,
        '2006': 0.337,
        '2007': 0.395,
        '2008': 0.536,
        '2009': 0.598,
        '2010': 0.64,
        '2011': 0.672,
        '2012': 0.695,
        '2013': 0.703,
        '2014': 0.741
      },
      average: 0.53
    },
    {
      location: 'ACADEMY 20',
      stats: {
        '2004': 0.302,
        '2005': 0.267,
        '2006': 0.354,
        '2007': 0.392,
        '2008': 0.385,
        '2009': 0.39,
        '2010': 0.436,
        '2011': 0.489,
        '2012': 0.479,
        '2013': 0.488,
        '2014': 0.49
      },
      average: 0.407
    }];

    wrapper.instance().setState({ cards });
    expect(wrapper.state('averages')).toEqual({});

    wrapper.instance().compareAverages();
    expect(wrapper.state('averages')).toEqual({
      "ACADEMY 20": 0.407,
      "COLORADO": 0.53,
      "compared": 0.768,
    });
  });

  it('should update state with averages when there are two cards selected', () => {
    expect(wrapper.state('averages')).toEqual({});

    wrapper.instance().selectLocation('ACADEMY 20');
    expect(wrapper.state('averages')).toEqual({});

    wrapper.instance().selectLocation('ADAMS COUNTY 14');
    expect(wrapper.state('averages')).toEqual({
      "ACADEMY 20": 0.407,
      "ADAMS COUNTY 14": 0.709,
      "compared": 0.574,
    });
  });

  it.skip('should add/remove class on the "?" button and toggle visibility of helper info when toggleHelperInfo is called', () => {
    wrapper = mount(<App />, { attachTo: document.body });

    expect(wrapper.find('.CardContainer__info').props('style')).toHaveProperty('visibility', 'hidden');
    expect(wrapper.find('.CardContainer__btn').hasClass('CardContainer__btn--Focus')).toEqual(false);
    
    wrapper.instance().toggleHelperInfo();

    expect(wrapper.find('.CardContainer__info').props('style')).toHaveProperty('visibility', 'visibile');
    expect(wrapper.find('.CardContainer__btn').hasClass('CardContainer__btn--Focus')).toEqual(true);

  });

  it.skip('should toggle classes when toggleDropDown is called', () => {
    wrapper = mount(<App />, { attachTo: document.body });

    expect(wrapper.find('.dropdown-content').hasClass('show')).toEqual(false);
    expect(wrapper.find('.CardContainer__header').hasClass('CardContainer__header--selected')).toEqual(false);
    
    wrapper.instance().toggleDropDown();

    expect(wrapper.find('.dropdown-content').hasClass('show')).toEqual(true);
    expect(wrapper.find('.CardContainer__header').hasClass('CardContainer__header--selected')).toEqual(true);
  });

  it('should render a Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render a CardContainer component', () => {
    expect(wrapper.find('CardContainer').length).toEqual(1);
  });

});