import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor() { 

    this.stats = this.compiledData(kinderData);
  } 

  compiledData = (kinderData) => {
    const results = kinderData.reduce((district, academicYear) => {
      let location = academicYear.Location.toUpperCase();
      let year = academicYear.TimeFrame;
     
      let info = this.parseData(academicYear.Data);
    
      if (!district[location]) {
        district[location] = {stats:{[year]: info}, location};
      } else {
        district[location].stats = {...district[location].stats, [year]: info};
      }
      return district;
    }, {});
   
    return results; 
  }

  parseData = (input) => {
    if (typeof input !== 'number') {
      return 0;
    } else {
      return (Math.round(1000 * input) / 1000);
    }
  }

  
  findByName = (district) => { 
    if (!district) {
      return;
    }

    const cleanedDistrict = district.toUpperCase();
    const districtKeys = Object.keys(this.stats);
 
    const matchingDistricts = districtKeys.reduce((matchingDistricts, key) => {
      if (key.toUpperCase() === cleanedDistrict) {
        return this.stats[key];
      }
      return matchingDistricts;
    }, {});

    if (matchingDistricts.location) {
      return matchingDistricts;
    }
  }

  findAllMatches = (district) => {
    const statValues = Object.values(this.stats);
    if (!district) {
      return statValues;
    }
    return statValues.filter(value => {
      return value.location.includes(district.toUpperCase());
    });
  }

  
}

