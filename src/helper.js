import Kinderdata from './data/kindergartners_in_full_day_program.js'


export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = {};
  }


  makeStats = () => {
    this.kinderData.reduce((unit, thingy) => {
      if (!acc[thingy.Location]) {
        acc[thingy.Location]
      }

      return acc[thingy.location[thingy.TimeFrame]] = [thingy.TimeFrame] 
    }, this.stats)
  }
}
