import kinderData from '../../data/kindergartners_in_full_day_program.js';

const uuidv4 = require('uuid/v4');

export default class DistrictRepository {
  constructor() { 

    this.stats = this.compiledData(kinderData);
  } 

  compiledData = (kinderData) => {
    const results = kinderData.reduce((district, academicYear) => {
      let location = academicYear.Location.toUpperCase();
      let year = academicYear.TimeFrame;
      let info = this.parseData(academicYear.Data);
      let key = uuidv4();    
      if (!district[location]) {
        district[location] = {stats:{[year]: info}, location, key: key};
      } else {
        district[location].stats = {...district[location].stats, [year]: info};
      }
      return district;
    }, {});
   
    return results; 
  }

  parseData = (input) => {
    return typeof input === 'number' ? (Math.round(1000 * input) / 1000) : 0;
  }
  
  findByName = (district) => { 
    if (!district) { return };
    const cleanedDistrict = district.toUpperCase();
 
    if (this.stats[cleanedDistrict]) {
      return this.stats[cleanedDistrict];
    }
  }

  findAllMatches = (district = '') => {
    const statValues = Object.values(this.stats);
    const districtMatches = {};
    const matchingDistricts = statValues.filter(value => {
      return value.location.includes(district.toUpperCase());
    });
    matchingDistricts.forEach(value => {
      const key = value.location;
      districtMatches[key] = value;

    });
    return districtMatches;
  }

  findAverage = (district) => {
    const matchingDistrict = this.findByName(district);
    const percentages = Object.values(matchingDistrict.stats);
    const total = percentages.reduce((total, percentage) => total += percentage);
    return this.parseData((total / percentages.length));
  }

  compareDistrictAverages = ((district1, district2) => {
    const capitals1 = district1.toUpperCase();
    const capitals2 = district2.toUpperCase();
    const firstAverage = this.findAverage(district1);
    const secondAverage = this.findAverage(district2);
    const compared = this.parseData((firstAverage / secondAverage));
    const comparision = {[capitals1]: firstAverage,
                         [capitals2]: secondAverage,
                         compared: compared};
    return comparision;
  })


}









