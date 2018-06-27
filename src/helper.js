import kinderData from './data/kindergartners_in_full_day_program.js'

export default class DistrictRepository {
  constructor() {
    this.stats = kinderData.reduce((stats, stat) => {
      if (stat.Data === 'N/A') {
        stat.Data = 0
      }
      const statObj = { [stat.TimeFrame] : Number(parseFloat(stat.Data).toFixed(3)) }
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



  findAllMatches = (search) => {
    if(!search){
      return Object.values(this.stats)
    }
    return Object.keys(this.stats).filter(stat => stat.toUpperCase().includes(search.toUpperCase()));
  }
}
