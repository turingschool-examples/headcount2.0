import kinderData from './data/kindergartners_in_full_day_program.js'

export default class DistrictRepository {
  constructor() {
    this.stats = kinderData.reduce((stats, stat) => {
      const statObj = { [stat.TimeFrame] : stat.Data }
        if (!stats[stat.Location]) {
          stats[stat.Location] = statObj
        } 
      stats[stat.Location] = { ...statObj, ...stats[stat.Location]}
      return stats
      }, {})
  }

  findByName = (search) => {
    if (!search) {
      return;
    }
    const statsKeys = Object.keys(this.stats);
    const districtData = statsKeys.reduce((districtData, stat) => {
      if (stat.toUpperCase() === search.toUpperCase()) {
        districtData = {
          location: stat.toUpperCase(),
          stats: this.stats[stat]
        };
      }
      return districtData;
    }, {});
    if (districtData.location) {
      return districtData;
    }
  }



  findAllMatching = (data) => {
    const matches = kinderData.map(stat => stat.stuff)

  }
}
