import Kinderdata from './data/kindergartners_in_full_day_program.js'


export default class DistrictRepository {
  constructor(kinderData) {
    this.kinderData = kinderData;
    this.stats = this.makeStats();
  }


  makeStats = () => {
    let obj = this.kinderData.reduce((unit, thingy) => {
      if (!unit[thingy.Location]) {
    unit[thingy.Location] = {
      [ thingy.TimeFrame]: thingy.Data
      }
    } else {
      unit[thingy.Location][thingy.TimeFrame] = thingy.Data
    } 

    return unit
    }, {})
    
    return obj
  }
}
