import React from 'react';
import { shallow } from 'enzyme';

import CompareCard from './CompareCard.js'

describe('CompareCard', () =>{

  it('should match snapshot', () => {
    const compareSelections = [{one: 'one', two: 'two'}]
    const wrapper = shallow(<CompareCard compareSelections={compareSelections}/>)

    expect(wrapper).toMatchSnapshot()
  })

  

})

