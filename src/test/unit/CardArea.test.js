import React from 'react';
import  ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardArea from '../../CardArea';
import Card from '../../Card'
import renderer from 'react-test-renderer';
import App from '../../App'


describe('CardArea', () => {

  it('should receive the correct props', () => {
    const props = {
      data: {
        COLORADO: {
          location: 'COLORADO',
          stats: [{2007: 1}]
        }
      }
    }
    const cardArea = shallow(<CardArea data={props} />)


    expect(cardArea.length).toEqual(1)
  })

  it('should match snapshot', () => {
    const props = {
      data: {
        COLORADO: {
          location: 'COLORADO',
          stats: [{2007: 1}]
        }
      }
    }
    const cardArea = shallow(<CardArea data={props} />)
    
    expect(cardArea).toMatchSnapshot();
  })


  
})