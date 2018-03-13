export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  findByName(name) {
    if (!name) {
      return;
    }
    const upperCaseName = name.toUpperCase();
    return this.stats[upperCaseName];
  }

  findAllMatches(name) {
    if (!name) {
      return Object.keys(this.stats).map(key => {
        return this.stats[key].stats;
      });
    }

    const upperCaseName = name.toUpperCase();

    return Object.keys(this.stats)
      .filter(key => key.includes(upperCaseName))
      .map( key => this.stats[key].stats);
  }

  cleanData(stats) {
    return stats.reduce((districts, stat)=> {
      const name = stat.Location.toUpperCase();

      if (!districts[name]) {
        districts[name] = { 
          location: name,
          stats: {} };
      }
     
      if (stat.Data < 1 && stat.Data > 0) {
        stat.Data = parseFloat(stat.Data).toFixed(3);
      }

      if (isNaN(stat.Data)) {
        stat.Data = 0;
      }

      districts[name].stats[stat.TimeFrame] = parseFloat(stat.Data);
      return districts;
    }, {});
  }
}
