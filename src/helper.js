import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor() {
    this.stats = this.removeDuplicates(kinderData);
  }

  removeDuplicates = (data) => {
    return data.reduce((acc, location) => {
      const upperCaseName = location.Location.toUpperCase();

      const newData = Math.round(location.Data * 1000) / 1000;
    
      if (!acc[upperCaseName]) {
        acc[upperCaseName] = {
          location: upperCaseName,
          stats: {}
        };
      }
      acc[upperCaseName].stats[location.TimeFrame] = newData || 0;
      return acc;
    }, {});
  }

  findByName = (data) => {
    if (data) {
      return this.stats[data.toUpperCase()];
    }
  };

  findAllMatches = (districtName) => {
    const statsVals = Object.values(this.stats);
 
    if (!districtName) {
      return statsVals;
    }
    return statsVals.reduce((acc, district) => {
      if (district.location.includes(districtName.toUpperCase())) {
        acc.push(district);
      } 
      return acc;
    }, []);
  }

  findAverage = (district) => {
    const districtData = this.findByName(district);
    const districtKeys = Object.keys(districtData.stats);
    const districtAverage = districtKeys.reduce((acc, data) => {
      acc += districtData.stats[data];

      return acc; 
    }, 0) / districtKeys.length;

    const finalAverage = Math.round(1000 * districtAverage) / 1000;
 
    return finalAverage;
  }

  compareDistrictAverages = (district1, district2) => {
    // debugger
    const toUpper = (data) => data.toUpperCase();
    const districtData1 = this.findAverage(district1);
    const districtData2 = this.findAverage(district2);

    const districtsCompared = {
      [toUpper(district1)]: districtData1, 
      [toUpper(district2)]: districtData2, compared: Math.round(1000 * (districtData1 / districtData2)) / 1000};
    return districtsCompared;
  }
}




