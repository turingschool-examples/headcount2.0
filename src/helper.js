export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleaner(data);
  }

  cleaner(data){
    return data.reduce((acc, value) => {
      let { Location, TimeFrame, Data } = value;
      if(!acc[Location]) {
        acc[Location] = {};
        acc[Location].data = {}
      }
        acc[Location].data[TimeFrame] = Data

      return acc
    }, {});
  }
}
