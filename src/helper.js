export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleaner(data);
  }

  cleaner(data){
    return data.reduce((acc, value) => {
      let { Location, TimeFrame, Data } = value;
      if(!acc[Location]) {
        acc[Location] = {};
        acc[Location].location = Location;
        acc[Location].data = {};
      }
        acc[Location].data[TimeFrame] = Math.round(Data * 1000) / 1000 || 0;
      return acc
    }, {});
  }

  findByName(location) {
    if (!location) {
      return undefined;
    }

    let school = Object.keys(this.data).filter(key => {
      return key.toLowerCase() === location.toLowerCase() ? this.data[key] : undefined;
    });

    return this.data[school]
  }
}
