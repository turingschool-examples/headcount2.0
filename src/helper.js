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
      if (!Unit[School.Location]) {
        Unit[School.Location.toUpperCase()] = {
          stats: {[School.TimeFrame]: Math.round(School.Data * 1000) / 1000},
          location: School.Location.toUpperCase()
        }
      } else {
      Unit[School.Location].stats={
        ...Unit[School.Location].stats,
        [School.TimeFrame] : Math.round(School.Data * 1000) / 1000}
    } 

      return Unit
    }, {})
    console.log(district.stats)
    return district
  }

  findByName = (name) => {
    if (!name) {
    console.log(typeof(this.makeStats()))
      return undefined
    }
    return this.stats[name.toUpperCase()]
  }

}