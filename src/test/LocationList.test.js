import React from 'react';
import LocationList from '../LocationList';
import { shallow } from 'enzyme';

describe('LocationList', () => {
    let wrapper;
    let selectLocationMock;

    beforeEach(() => {
        selectLocationMock = jest.fn()
        wrapper = shallow(<LocationList locations={['Colorado']} selectLocation={selectLocationMock} />)
    })

    it('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should call selectLocation when location button is clicked', () => {
        wrapper.find('.location-btn').simulate('click')

        expect(selectLocationMock).toHaveBeenCalled()
    })
})