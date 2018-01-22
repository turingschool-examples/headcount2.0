export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce((acc, {Location, TimeFrame, Data})=>{
      if (!acc[Location]) {
        acc[Location] = []
      }
      acc[Location].push({TimeFrame, Data})
      return acc;
    },{})
  }
}
