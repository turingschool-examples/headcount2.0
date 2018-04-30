export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.cleanedData(schoolData);
  }

  cleanedData = (schoolData) => {
    const cleanedData = schoolData.reduce((cleanedInfo, school) => {

      if (!cleanedInfo[school.Location]) {
        cleanedInfo[school.Location] = {};
      } 
      
      if (!cleanedInfo[school.Location][school.TimeFrame]) {
        cleanedInfo[school.Location][school.TimeFrame] = school.Data;
      } 

      return cleanedInfo;
      
    }, {}); 

    return cleanedData;
  }
}


