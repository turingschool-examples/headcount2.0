import React from 'react';
import App from './App';
import CardContainer from "../CardContainer/CardContainer.js";
import { shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('App', () => {
  let app;

  beforeEach(()=>{
    app = shallow(<App />);
    app.setState({
      districtsData: { 
        COLORADO: { 
          location: "COLORADO", 
          stats: { 2007: 0.013, 2009: 3.004, 2013: 1.101 }
        } 
      }
    });
  }) ;

  it('matches the snapshot', () => {
    const app = renderer.create(<App />);

    expect(app).toMatchSnapshot();
  });

  it('should render a CardContainer', () => {
    expect(app.find(CardContainer));
  });

  it('should have a districtsData state of an object', () => {
    const expectedState = {
      COLORADO: {
        location: "COLORADO",
        stats: { 2007: 0.013, 2009: 3.004, 2013: 1.101 }
      }
    };

    expect(app.state('districtsData')).toEqual(expectedState);
  });

  it('should start with a default comparedCards state of an empty array', () => {
    expect(app.state('comparedCards')).toEqual([]);
  });

  describe('searchFilter method', () => {
    let app;

    beforeEach(() => {
      app = shallow(<App />);
    });

    it('should change the state of districtsData based on the value it is passed', () => {
      const mockInput = 'TOP';
      const expectedState = [{ 
        "location": "COTOPAXI RE-3", 
        "stats": { "2004": 0, "2005": 0, "2006": 0, "2007": 0, "2008": 1, "2009": 1, "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1 } }];

      app.instance().searchFilter(mockInput);
      expect(app.state('districtsData')).toEqual(expectedState);
    });

    it('should not be case sensitive', () => {
      const mockInput = 'ToP';
      const expectedState = [{
        "location": "COTOPAXI RE-3",
        "stats": { "2004": 0, "2005": 0, "2006": 0, "2007": 0, "2008": 1, "2009": 1, "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1 }
      }];

      app.instance().searchFilter(mockInput);
      expect(app.state('districtsData')).toEqual(expectedState);
    });

    it('should work with numbers', () => {
      const mockInput = '51';
      const expectedState = [{ 
        "location": "MESA COUNTY VALLEY 51", 
        "stats": { "2004": 0.307, "2005": 0.305, "2006": 0.255, "2007": 0.245, "2008": 0.262, "2009": 0.18, "2010": 0.182, "2011": 0.224, "2012": 0.198, "2013": 0.179, "2014": 0.482 } 
      }];

      app.instance().searchFilter(mockInput);
      expect(app.state('districtsData')).toEqual(expectedState);
    });
  });

  describe('updateCompareState method', () => {
    let app;

    beforeEach(() => {
      app = shallow(<App />);
    });
    

    it('should call addComparedCard if the clicked state is false', () => {
      const mockClickedState = false;
      const mockComparedCard = {};
      const spy = spyOn(app.instance(), 'addComparedCard');

      app.instance().updateCompareState(mockClickedState, mockComparedCard);
      expect(spy).toHaveBeenCalled();
    });

    it('should call removeComparedCard if the clicked state is true', () => {
      const mockClickedState = true;
      const mockComparedCard = {};
      const spy = spyOn(app.instance(), 'removeComparedCard');

      app.instance().updateCompareState(mockClickedState, mockComparedCard);
      expect(spy).toHaveBeenCalled();
    });

    it('should only call addComparedCard if the comparedCards array length is less than 2', () => {
      const mockClickedState = false;
      const mockComparedCard = {};
      app.setState({
        comparedCards: ['thing1', 'thing2']
      });
      const spy = spyOn(app.instance(), 'addComparedCard');

      app.instance().updateCompareState(mockClickedState, mockComparedCard);
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('addComparedCard method', () => {
    let app;

    beforeEach(() => {
      app = shallow(<App />);
    });

    it('should add a card to the comparedCards state', () => {
      const mockCardInfo = {};

      expect(app.state('comparedCards')).toHaveLength(0);
      app.instance().addComparedCard(mockCardInfo);
      expect(app.state('comparedCards')).toHaveLength(1);
      
    });
  });

  describe('removeComparedCard method', () => {
    let app;

    beforeEach(() => {
      app = shallow(<App />);
      app.setState({
        comparedCards: [{
          district: {
            location: "COLORADO",
            stats: { 2007: 0.013, 2009: 3.004, 2013: 1.101 }
          }}, 
        {
          district: {
            location: 'PUEBLO',
            stats: { 2007: 0.013, 2009: 3.004, 2013: 1.101 }
          }
        }]
      });
    });

    it('should add remove the card it was passed as an argument from the comparedCards state', () => {
      const mockCardInfo = {
        district: {
          location: "COLORADO",
          stats: { 2007: 0.013, 2009: 3.004, 2013: 1.101 }
        }
      };
      const expectedState = [{
        district: {
          location: 'PUEBLO',
          stats: { 2007: 0.013, 2009: 3.004, 2013: 1.101 }
        }
      }];

      expect(app.state('comparedCards')).toHaveLength(2);
      app.instance().removeComparedCard(mockCardInfo);
      expect(app.state('comparedCards')).toHaveLength(1);
      expect(app.state('comparedCards')).toEqual(expectedState);

    });
  });
});



