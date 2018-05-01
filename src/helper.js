export default class DistrictRepository {
  constructor(districts) {
    this.stats = this.organizeData(districts)
  }

  organizeData(districts) {
    const districtData = districts.reduce((districtAcc, data) => {
      const dataLocation = data.Location.toUpperCase();
      if(!districtAcc[dataLocation]) {
        districtAcc[dataLocation] = {location: data.Location.toUpperCase()};
      }   
      return districtAcc;
    }, {});
    // console.log(districtData)
    return districtData;
  }

  findByName(districtName) {
    if (districtName) {
      districtName = districtName.toUpperCase();
    }  
    if (Object.keys(this.stats).includes(districtName)) {
      return this.stats[districtName];
    } else {
      return undefined;
    }
  }
}

