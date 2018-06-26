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
      // if (!search) {
      //   return 
      // } 

    let stats = kinderData.reduce((stats, stat) => {
      const statObj = { [stat.TimeFrame] : stat.Data }
        if (!stats[stat.Location]) {
          stats[stat.Location] = statObj
        } 
      stats[stat.Location] = { ...statObj, ...stats[stat.Location]}
      return stats
      }, {})

    const items = Object.keys(stats).reduce((items, stat) => {
      if(stat === search) {
        items['location'] = stat.toUpperCase()
      }
        // console.log(items.location )
      return items
    }, {}) 
  }



  findAllMatching = (data) => {
    const matches = kinderData.map(stat => stat.stuff)

  }
}
