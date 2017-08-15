import React, { Component } from 'react'
import kinderData from '../data/kindergartners_in_full_day_program'

export default class DistrictRepository extends Component {
  constructor() {
    super();
    this.data = this.getData(kinderData);
  }

  // componentDidMount() {
  //   this.getData(kinderData)
  // }

  getData(data) {
    return data.reduce((accu, elem) => {

      if (!accu[elem.Location]) {

        accu[elem.Location.toUpperCase()] = Object.assign(elem, { Location: elem.Location.toUpperCase() } )
        // accu[elem.Location].Data = { elem.Data}
      }

      const roundedData = Math.round(1000*elem.Data)/1000
      accu[elem.Location].Data = { [elem.TimeFrame]: roundedData };
      // console.log(accu[elem.Location].Data[elem.TimeFrame]);
      return accu
    }, {})
  }

  findByName(name) {
    // console.log(this.data);
    if (name === undefined) {
      return undefined
    }

    const upName = name.toUpperCase();
    const dataKey = Object.keys(this.data)
    const searchedKey = dataKey.filter( (key) => upName === key )
    return this.data[searchedKey]
  }

  render() {
    return (
      <div>
        <button onClick={() => this.data(kinderData)}>
        </button>
      </div>
    )
  }
}
