export default class DistrictRepository {
  constructor(data) {
    this.data = this.getData(data);
  }

  getData(data) {
    return data.reduce((accu, elem) => {
      const newObj = Object.assign({}, elem, {
        Location: elem.Location.toUpperCase(),
        Data: {}
      });

      if (!accu[elem.Location]) {
        accu[elem.Location] = newObj;
      }

      const accuData = accu[elem.Location].Data;

      const roundedData = Math.round(1000 * elem.Data) / 1000;

      Object.assign(accuData, { [elem.TimeFrame]: roundedData || 0 });

      return accu;
    }, {});
  }

  findByName(name) {
    if (name === undefined) {
      return undefined;
    }

    const dataKey = Object.keys(this.data);
    const searchedKey = dataKey.filter(
      key => name.toUpperCase() === key.toUpperCase()
    );

    return this.data[searchedKey];
  }

  findAllMatches(name) {
    const { data } = this;
    const keys = Object.keys(data);
    const matchedArray = [];
    keys.forEach(key => matchedArray.push(data[key]));

    if (!name) {
      return matchedArray;
    }

    const newArray = matchedArray.filter(place =>
      place.Location.toUpperCase().includes(name.toUpperCase())
    );

    return newArray;
  }

  findAverage(location) {
    const locationObject = this.findByName(location);
    const yearsKeys = Object.keys(locationObject.Data);
    const averages =
      yearsKeys.reduce((average, year) => {
        average += locationObject.Data[year];
        return average;
      }, 0) / yearsKeys.length;

    return Math.round(1000 * averages) / 1000;
  }

  compareDistrictAverages(average1, average2) {
    return Math.round(1000 * (average1 / average2)) / 1000;
  }
}
