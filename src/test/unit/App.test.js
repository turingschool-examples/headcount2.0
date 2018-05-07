import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../../App/App';
import CardArea from '../../CardArea/CardArea';

describe('App', () => {
  it('matches the snapsnot', () => {
    const app = renderer.create(<App />).toJSON();

    expect(app).toMatchSnapshot();
  });
  
  it('renders', () => {
    const app = shallow(<App />);
    
    expect(app).toHaveLength(1);
  });

  it('should have default state', () => {
    const app = shallow(<App />);
    const expectedState = [];

    expect(app.state('selectedCards')).toEqual(expectedState);
  });

  it('should render CardArea', () => {
    const app = shallow(<App />);

    expect(app.find(CardArea)).toHaveLength(1);
  });

  it('should change data', () => {
    const app = shallow(<App />);
    const mockEvent = {target :{value : 'COLORADO'}};

    expect(app.instance().state.cleanData).toHaveLength(181);
    app.instance().changeData(mockEvent);
    expect(app.instance().state.cleanData).toHaveLength(2);
  });

  it('should populate selectedCards array', () => {
    const app = shallow(<App />);
    const location = 'COLORADO';
    app.instance().selectCard(location);
    expect(app.instance().state.selectedCards).toHaveLength(1);
  });
});
