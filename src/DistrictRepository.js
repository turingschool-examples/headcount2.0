import React, { Component } from 'react'
import SchoolList from './SchoolList'
import Search from './Search'
import kinderData from '../data/kindergartners_in_full_day_program'

export default class DistrictRepository extends Component {
  constructor() {
    super();
    this.data = this.getData(kinderData);
    this.state = {
      data: {}
    }
    this.findAllMatches = this.findAllMatches.bind(this);
    this.findAverage = this.findAverage.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: this.data
    })
  }

  getData(data) {
    return data.reduce((accu, elem) => {
      const newObj = Object.assign({}, elem, { Location: elem.Location.toUpperCase(), Data: {} } );

      if (!accu[elem.Location]) {
        accu[elem.Location] = newObj
      }

      const accuData = accu[elem.Location].Data;
      const roundedData = Math.round(1000*elem.Data)/1000;

      Object.assign(accuData, {[elem.TimeFrame]: roundedData || 0})

      return accu
    }, {})
  }

  findByName(name) {
    if (name === undefined) {
      return undefined
    }

    const dataKey = Object.keys(this.data)
    const searchedKey = dataKey.filter( (key) => name.toUpperCase() === key.toUpperCase())

    return this.data[searchedKey]
  }

  findAllMatches(name) {
    const { data } = this;
    const keys = Object.keys(data);
    const matchedArray = [];
    keys.forEach( key => matchedArray.push(data[key]));

    if (!name) {
    return matchedArray
    }

    const newArray = matchedArray.filter( place => place.Location.toUpperCase().includes(name.toUpperCase()));

    this.setState({
      data: newArray
    });

    return newArray;
  }

  findAverage(location) {
    const locationObject = this.findByName(location);
    const yearsKeys = Object.keys(locationObject.Data);
    const averages = yearsKeys.reduce( (average, year) => {
      average += locationObject.Data[year]
      return average
    }, 0) / yearsKeys.length;

    return Math.round(1000*averages)/1000;
  }

  compareDistrictAverages(location1, location2) {
    const district1 = this.findAverage(location1);
    const district2 = this.findAverage(location2);
    const ratio = Math.round(1000 * (district1 / district2))/1000
    const comparison = {[location1.toUpperCase()]: district1,
                        [location2.toUpperCase()]: district2,
                        compared: ratio}

    return comparison
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <Search findSchool={this.findAllMatches}/>
        <SchoolList data={data} findAverage={this.findAverage}/>
      </div>
    )
  }
}
