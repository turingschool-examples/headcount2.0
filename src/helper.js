export default class DistrictRepository {
  constructor(schoolData) {
    this.data = this.cleanData(schoolData);
  }

  cleanData(schoolData) {
    return schoolData.reduce((acc, {Location, TimeFrame, Data})=>{
      if (!acc[Location]) {
        acc[Location] = [];
      }
      acc[Location].push({TimeFrame, Data});
      return acc;
    }, {});
  }
}
