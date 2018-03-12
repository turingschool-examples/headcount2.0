import kinderData from '../data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = kinderData.reduce((obj, program) => {
      if(!obj[program.Location]){
        obj[program.Location] = {}
      } 
      obj[program.Location][program.TimeFrame] = program.Data
      return obj
    }, {})
  }

  findByName(name) {
    return Object.keys(this.stats).reduce((obj, districtName) => {
      if (districtName === name) {
        obj[districtName] = this.stats[districtName]
      } 
      return obj
    }, {})
  }
}
