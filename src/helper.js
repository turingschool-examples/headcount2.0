export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.cleanedData(schoolData);
  }

  cleanedData = (schoolData) => {
    return schoolData.reduce((cleanedInfo, school) => {

      if (!cleanedInfo[school.Location]) {
        cleanedInfo[school.Location] = {};
      } 
      
      if (!cleanedInfo[school.Location][school.TimeFrame]) {
        cleanedInfo[school.Location][school.TimeFrame] = school.Data;
      } 
      return cleanedInfo;
    }, []); 
  }

  findByName = (district) => {
    // const upperCaseDistrict = district.toUpperCase();
    const districtKeys = Object.keys(this.stats);

    districtKeys.find(district => this.stats[district] );
  }



}