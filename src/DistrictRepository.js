import React, { Component } from 'react'
import SchoolList from './SchoolList'
import Search from './Search'
import kinderData from '../data/kindergartners_in_full_day_program'

export default class DistrictRepository extends Component {
  constructor(data) {
    super();
    this.data = this.getData(kinderData);
    this.state = {
      data: {}
    }
    this.findAllMatches = this.findAllMatches.bind(this);
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

    const upName = name.toUpperCase();
    const dataKey = Object.keys(this.data)
    const searchedKey = dataKey.filter( (key) => upName === key.toUpperCase() )
    return this.data[searchedKey]
  }

  findAllMatches(name) {
    console.log('triggered')
    const matchedArray = []
    const keys = Object.keys(this.data)
    keys.forEach( key => matchedArray.push(this.data[key]))

    if (!name) {
      return matchedArray
    }

    return matchedArray.filter( place => place.Location.toUpperCase().includes(name.toUpperCase()))
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <Search findSchool={this.findAllMatches}/>
        <SchoolList data={data}/>
      </div>
    )
  }
}
