export default class DistrictRepository {
  constructor(stats) {
    this.stats = stats.reduce((districts, stat)=> {
       if (!districts[stat.Location]) {
        districts[stat.Location] = [];
       }
       districts[stat.Location].push({
        timeFrame: stat.TimeFrame,
        data: stat.Data
      })
       return districts
    }, {})
  }
}
