export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleaner(data);
  }

   cleaner(data){
    return data.reduce((acc, value) => {
      let { Location, TimeFrame, Data } = value;
      Location = Location.toUpperCase();
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

    return this.data[location.toUpperCase()]
  }

  findAllMatches(location){
    const matches = Object.keys(this.data);

    if(!location) {
      return matches;
    }

    const found = matches.filter(name => {
     return  name.includes(location.toUpperCase())
    })

    return found;
  }

  findAverage(location) {
    const school = this.findByName(location);
    const keys = Object.keys(school.data);
    const total = keys.reduce((acc, key) => {
      acc += school.data[key];
      return acc;
    },0)/keys.length;
    return Math.round(total * 1000) / 1000;
  }

  compareDistrictAverages(location1, location2) {
    const district1 = this.findAverage(location1);
    const district2 = this.findAverage(location2);
    const divided = district1/district2;
    const compare = Math.round(divided * 1000) / 1000;
    const result = {[location1.toUpperCase()]: district1, [location2.toUpperCase()]: district2, compared: compare};
    return result
  }
}
