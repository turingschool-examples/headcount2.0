export default class DistrictRepository {
  constructor(data) {
    this.stats = this.condenseData(data);
  }
  condenseData = data => {
    return data.reduce((acc, school) => {
      let district = school.Location.toUpperCase();
      if (!acc[district]) {
        acc[district] = {
          years: {}
        };
      }
      acc[district].years[school.TimeFrame] =
        Math.round(1000 * school.Data) / 1000;
      return acc;
    }, {});
  };
}
