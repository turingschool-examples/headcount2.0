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
    // this.findAverage('colorado');
    const lowCaseName = name === undefined ? '' : name.toLowerCase();
    return Object.keys(this.data).filter(e => {
      const index = e.toLowerCase().indexOf(lowCaseName);
      return lowCaseName === '' ? true : index >= 0;
    });
  }

  findAverage(city) {
    const cityToAvg = this.findByName(city).data;
    console.log(cityToAvg);
    const keys = Object.keys(cityToAvg);

    return Math.round((keys.reduce((accu, elem) => accu + cityToAvg[elem], 0) / keys.length) *1000) / 1000 ;




    return keys.reduce((accu, elem, index, array) => {
      console.log(elem)
      accu += cityToAvg[elem];
      return accu
    }, 0) / keys.length;
  }

  compareDistrictAverages() {

  }
}
