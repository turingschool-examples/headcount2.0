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

  cleanData(stats) {
    return stats.reduce((districts, stat)=> {
      const name = stat.Location.toUpperCase();

      if (!districts[stat.Location]) {
        districts[name] = { 
          location: name,
          data: {} };
      }
      if (stat.Data === 'N/A') {
        stat.Data = 0;
      }
      if (stat.Data < 1 && stat.Data > 0) {
        stat.Data = parseFloat(stat.Data).toFixed(3);
      }

      districts[name].data[stat.TimeFrame] = parseFloat(stat.Data);
      return districts;
    }, {});
  }
}
