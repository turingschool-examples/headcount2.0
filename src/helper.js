export default class DistrictRepository {
  constructor(data) {
    this.data = this.normalize(data);
    console.log(this.data);
  }

  normalize(data) {
    return data.reduce((dataObj, e) => {
      if (!dataObj[e.Location]) {
        dataObj[e.Location] = {
          location: e.Location,
          data: {}
        };
      }
      dataObj[e.Location].data[e.TimeFrame] = e.Data;


      // const keys = Object.keys(e).map(key =>
      //     [key.charAt(0).toLowerCase(),
      //     ...key.slice(1)].join(''));
      return dataObj;
    }, {})
  }

  findByName(name) {
    let lowCaseName = name.toLowerCase();
    let keys = Object.keys(this.data).map(e => e.toLowerCase())
    return this.data[name]
  }
}
