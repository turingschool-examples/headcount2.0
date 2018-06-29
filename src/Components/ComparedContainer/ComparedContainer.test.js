import React from 'react';
import ComparedContainer from './ComparedContainer';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper';
import data from '../../data/kindergartners_in_full_day_program';


describe('ComparedContainer', () => {

  let wrapper;
  let mockSelectCard = jest.fn()
  const mockDistrictMethods = new DistrictRepository(data)
  const mockSelectedCards = [{}, {}]
  beforeEach(() => {
    wrapper = shallow(<ComparedContainer 
                        selectedCards={mockSelectedCards}
                        selectCard={mockSelectCard}
                        districtMethods={mockDistrictMethods}
                        />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})