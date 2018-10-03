import Kinderdata from './data/kindergartners_in_full_day_program.js'


export default class DistrictRepository {
  constructor(kinderData) {
    this.kinderData = kinderData;
    this.stats = this.makeStats();
  }


  makeStats = () => {
    let district = this.kinderData.reduce((Unit, School) => {
      if ( School.Data === 'N/A') {
        School.Data = 0;
      }
      if (!Unit[School.Location.toUpperCase()]) {
        Unit[School.Location.toUpperCase()] = {
          stats: {[School.TimeFrame]: Math.round(School.Data * 1000) / 1000},
          location: School.Location.toUpperCase()
        }
      } else {
      Unit[School.Location.toUpperCase()].stats={
        ...Unit[School.Location.toUpperCase()].stats,
        [School.TimeFrame] : Math.round(School.Data * 1000) / 1000}
    } 

      return Unit
    }, {})
    return district
  }

  findByName = (name) => {
    if (!name || !this.stats[name.toUpperCase()]) {
      return undefined
    }
    return this.stats[name.toUpperCase()]
  }

  findAllMatches = (name) => {
    let locations = Object.keys(this.stats)
    if (name === undefined) {
      return locations.map( location => this.stats[location])
    } else { 
      let locationsFiltered = locations.filter( location => 
        location.includes(name.toUpperCase())
      )
    return locationsFiltered.map( location => this.stats[location])
    }}
}









