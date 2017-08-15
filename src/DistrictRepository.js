import React, { Component } from 'react'

export default class DistrictRepository extends Component {
  constructor(data) {
    super();
    this.data = this.getData(data);
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
    const matchedArray = []
    const keys = Object.keys(this.data)
    keys.forEach( key => matchedArray.push(this.data[key]))

    if (!name) {
      return matchedArray
    }

    const newArray = matchedArray.filter( place => place.Location.toUpperCase().includes(name.toUpperCase()))
    return newArray
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
