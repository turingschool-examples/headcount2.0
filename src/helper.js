export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.cleanedData(schoolData);
  }

  cleanedData = (schoolData) => {
    return schoolData.reduce((cleanedInfo, school) => {
      const upperCaseDistrict = school.Location.toUpperCase();

      if (!cleanedInfo[upperCaseDistrict]) {
        cleanedInfo[upperCaseDistrict] = {
          location: upperCaseDistrict,
          stats: {}
        };
      } 

      if (!cleanedInfo[upperCaseDistrict].stats[school.TimeFrame]) {
        cleanedInfo[upperCaseDistrict].stats[school.TimeFrame] = school.Data;
      } 

      return cleanedInfo;

    }, {}); 
  }

  findByName = (location) => {
    const upperCaseLocation = location.toUpperCase();
    const districtKeys = Object.keys(this.stats);

    return this.stats[upperCaseLocation]
  }
}