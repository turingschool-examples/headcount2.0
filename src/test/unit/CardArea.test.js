import React from 'react';
import  ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardArea from '../../CardArea';
import Card from '../../Card'
import renderer from 'react-test-renderer';
import App from '../../App'


describe('CardArea', () => {

  it('should match snapshot', () => {
    const props = [{
      location: 'COLORADO',
      stats: [{2007: 1}]
    }]  
    const cardArea = shallow(<CardArea data={props} />)

    expect(cardArea).toMatchSnapshot();
  })
})
