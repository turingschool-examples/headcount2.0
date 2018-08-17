import React from 'react';
import CardContainer from '../CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {

    it('should match the snapshot', () => {
        const cards = []
        const wrapper = shallow(<CardContainer cards={cards} averages={{}} />)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should match the snapshot if there is a card ', () => {
        const cards = [{
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
        }]
        const wrapper = shallow(<CardContainer cards={cards} averages={{}} />)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should match the snapshot if there are multiple cards', () => {
        const cards = [{
            average: 0.53,
            location: 'COLORADO',
            stats: {
                "2004": 0.24,
                "2005": 0.278,
                "2006": 0.337,
            }
        }, {
            average: 0.53,
            location: 'ACADEMY 20',
            stats: {
                "2004": 0.24,
                "2005": 0.278,
                "2006": 0.337,
            }
        }]
        const wrapper = shallow(<CardContainer cards={cards} averages={{}} />)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should only display compared average if it exists', () => {
        let averagesObj = {}
        const cards = []
        let wrapper = shallow(<CardContainer cards={cards} averages={averagesObj} />)

        expect(wrapper.find('.compared-average')).toHaveLength(0)

        averagesObj = { COLORADO: 0.53, ACADEMY: 0.64, compared: 0.54 }
        wrapper = shallow(<CardContainer cards={cards} averages={averagesObj} />)

        expect(wrapper.find('.compared-average')).toHaveLength(1)
    })
})