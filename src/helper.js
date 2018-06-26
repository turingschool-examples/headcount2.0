import kinderData from './data/kindergartners_in_full_day_program.js'

export default class DistrictRepository {
  constructor() {
    this.stats = kinderData.reduce((stats, stat) => {
      let statObj = { [stat.TimeFrame] : stat.Data }
        if (!stats[stat.Location]) {
          stats[stat.Location] = statObj
        } 
      stats[stat.Location] = { ...statObj, ...stats[stat.Location]}
      return stats
      }, {})
  }

  findByName = (data) => {
    const items = kinderData.reduce((items, item) => {
      if (item.Location === data){

      const location = item.Location
      items[location] = data
      }
      return items
      console.log(items)

    }, {})
    return items
  }

  findAllMatching = (data) => {
    const matches = data.filter(match => match.stuff)

  }
}
