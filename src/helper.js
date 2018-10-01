import KinderData from './data/kindergartners_in_full_day_program.js'

export default class DistrictRepository {
  constructor(dataSet) {
    this.dataSet = dataSet
    this.stats = this.makeStats()
  }

  makeStats() {
    let obj = this.dataSet.reduce((statistic, thing) => {
    if (!statistic[thing.Location]) {
      statistic[thing.Location] = {
      [thing.TimeFrame] : thing.Data
      }
    } else {
      statistic[thing.Location][thing.TimeFrame] = thing.Data
    }
    return statistic
  }, {})
  return obj
  }
}
