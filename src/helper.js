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
}
