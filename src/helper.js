export default class DistrictRepository {
  constructor(data) {
    this.data = this.normalize(data);
    // console.log(this.data);
  }

  normalize(data) {
    return data.reduce((dataObj, e) => {
      if (!dataObj[e.Location]) {
        dataObj[e.Location] = {
          location: e.Location,
          data: {}
        };
      }

      const data = parseFloat(e.Data) ? Math.round(e.Data * 1000) / 1000 : 0;
      dataObj[e.Location].data[e.TimeFrame] = data;


      // const keys = Object.keys(e).map(key =>
      //     [key.charAt(0).toLowerCase(),
      //     ...key.slice(1)].join(''));
      return dataObj;
    }, {})
  }

  findByName(name) {
    if (name === undefined) {
      return undefined
    }

    let lowCaseName = name.toLowerCase();
    const place = Object.keys(this.data).find(e => {
      return e.toLowerCase() === lowCaseName;
    });
    return this.data[place]
  }
}
