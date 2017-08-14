import React, { Component } from 'react'
import kinderData from '../data/kindergartners_in_full_day_program'

export default class DistrictRepository extends Component {
  constructor() {
    super();
    this.data = this.getData(kinderData)
  }

  // componentDidMount() {
  //   this.getData(kinderData)
  //   console.log(this.data.length)
  // }
  //
  getData(data) {
    return data.reduce((accu, elem) => {
      if (!accu[elem.Location]) {
        accu[elem.Location] = elem
      }
      console.log(accu)
      return accu
    }, {})
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
