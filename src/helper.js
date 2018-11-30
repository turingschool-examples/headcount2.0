export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanStats(stats);
  }

  cleanStats = (stats) => stats.reduce((allStats, stat) => {
    const upperCaseStat = stat.Location.toUpperCase();
    const roundedData = Math.round(1000 * stat.Data) / 1000 || 0;

    if(allStats[upperCaseStat]) {
      allStats[upperCaseStat][stat.TimeFrame] = roundedData
    } else {
    allStats[upperCaseStat] = {[stat.TimeFrame]: roundedData};
  }
    return allStats;
  }, {});

  findByName = (name) => {

    if (name && Object.keys(this.stats).includes(name.toUpperCase())) {
      const upperCaseName = name.toUpperCase();
      return {location: upperCaseName, stats: this.stats[upperCaseName]};
    } else {
      return undefined
    }
  }

  findAllMatches = (searchName) => {
      if (searchName && Object.keys(this.stats).includes(searchName.toUpperCase())) {
        const ucSearchName = searchName.toUpperCase();
        return Object.keys(this.stats).reduce((matching, stat) => {
            if (stat.includes(ucSearchName)) {
              return [...matching, {location: stat, stats: this.stats[stat]}]
            } 
          return matching;
          }, []);
      } else if (!searchName) {
          return Object.keys(this.stats).map(stat => {
           return {location: stat, stats: this.stats[stat]} 
         })
      } else {
          return [];
      }
    }
}

