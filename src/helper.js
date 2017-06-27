export default class DistrictRepository {
  constructor(data) {
    this.data = this.normalize(data);
  }

  normalize(data) {
    return data.reduce((dataObj, e) => {
      const data = parseFloat(e.Data) ? Math.round(e.Data * 1000) / 1000 : 0;

      if (!dataObj[e.Location]) {
        dataObj[e.Location] = {
          location: e.Location,
          data: {}
        };
      }
      dataObj[e.Location].data[e.TimeFrame] = data;

      return dataObj;
    }, {});
  }

  findByName(name) {
    if (name === undefined) {
      return undefined
    }

    const lowCaseName = name.toLowerCase();
    const place = Object.keys(this.data).find(e => {
      return e.toLowerCase() === lowCaseName;
    });
    return this.data[place]
  }

  findAllMatches(name) {
    const lowCaseName = name === undefined ? '' : name.toLowerCase();
    return Object.keys(this.data).filter(e => {
      const index = e.toLowerCase().indexOf(lowCaseName);
      return lowCaseName === '' ? true : index >= 0;
    });
  }
}
