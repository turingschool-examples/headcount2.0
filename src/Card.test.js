import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from './Card';

describe('Card', () => {

  it('should match a snapshot', () => {
    const mockData = [{
      location: 'Turing',
      stats: {
        '2018' : 1
      }
    },
    {
      location: 'Turing',
      stats: {
        '2018' : 1
      }
    }
    ];
    
    const wrapper = shallow(<Card {...mockData[0]} /> );

  });



  
});