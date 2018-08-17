export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }   

  removeDuplicates = (data) => {
    return data.reduce((dataLocationObj, dataObj) => {
      let location = dataObj.Location.toUpperCase();
      let yearData = Math.round(dataObj.Data * 1000) / 1000;

      if (isNaN(dataObj.Data)) {
        yearData = 0;
      }

      if (!dataLocationObj[location]) {
        dataLocationObj[location] = {
          location: location,
          stats: {}
        };
      }

      dataLocationObj[location].stats[dataObj.TimeFrame] = yearData;

      return dataLocationObj;
    }, {});
  }

  findByName = (location = '') => {
    return this.stats[location.toUpperCase()];
  }

  findAllMatches = (searchInput = '') => {
    const locations = Object.keys(this.stats);
    const matchingLocations = locations.filter(location => (
      location.toLowerCase().includes(searchInput.toLowerCase())
    ));

    return matchingLocations;
  }

  findAverage = (location) => {
    const locationStats = this.stats[location].stats;
    const sumTotal = Object.keys(locationStats).reduce((sum, year) => {
      sum += locationStats[year];
      return sum;
    }, 0);
    const average = sumTotal / Object.keys(locationStats).length;
    const roundedAverage = Math.round(average * 1000) / 1000;

    return roundedAverage;
  }

  compareDistrictAverages = (locationA, locationB) => {
    const getAverage = (location) => {
      const capitalizedLocation = location.toUpperCase();
      return this.findAverage(capitalizedLocation);
    };

    const locationAAverage = getAverage(locationA);
    const locationBAverage = getAverage(locationB);

    const getComparedAverage = () => {
      if (locationAAverage < locationBAverage) {
        return Math.round((locationAAverage / locationBAverage) * 1000) / 1000;
      }

      return Math.round((locationBAverage / locationAAverage) * 1000) / 1000;
    };

    return {
      [locationA.toUpperCase()]: locationAAverage,
      [locationB.toUpperCase()]: locationBAverage,
      'compared': getComparedAverage()
    };
  }
}
