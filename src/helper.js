export default class DistrictRepository {
  constructor(districts) {
    this.stats = this.organizeData(districts)
  }

  organizeData(districts) {
    const districtData = districts.reduce((districtAcc, data) => {
      if(!districtAcc[data.Location]) {
        districtAcc[data.Location] = {};
      }   
      return districtAcc;
    }, {});
    console.log(districtData)
    return districtData;
  }
}

