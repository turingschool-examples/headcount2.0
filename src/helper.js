export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = this.sanitizeData(kinderData);
  }
  
  sanitizeData = (kinderData) => {
    return kinderData.reduce((schoolData, school) => {
      const upperLocation = school.Location.toUpperCase();

      if (!Object.keys(schoolData).includes(upperLocation)) {


        schoolData[upperLocation] = { data: {[school.TimeFrame]: (parseFloat(parseFloat(school.Data).toFixed(3))) || 0}};
      } else {
        schoolData[upperLocation].data[school.TimeFrame] = (parseFloat(parseFloat(school.Data).toFixed(3))) || 0;
      }
      return schoolData;
    }, {})
  }

  findByName = (name) => {
    if (name) {
    const upperName = name.toUpperCase();

      if (this.stats[upperName]) {
        const foundSchoolData = this.stats[upperName];
        const result = {location: upperName, stats: foundSchoolData.data}
        return result;
      } else {
        return undefined;
      }
    }
  }
}