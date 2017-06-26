export default class DistrictRepository {
  constructor(data) {
    this.data = this.normalize(data);
  }

  normalize(data) {
    return data.reduce((dataObj, e) => {
      if (!dataObj[e.Location]) {
        dataObj[e.Location] = [];
      }
      dataObj[e.Location].push({ location: e.Location,
                                 timeFrame: e.TimeFrame,
                                 data: e.Data});


      // const keys = Object.keys(e).map(key =>
      //     [key.charAt(0).toLowerCase(),
      //     ...key.slice(1)].join(''));
      return dataObj;
    }, {})
  }
}
