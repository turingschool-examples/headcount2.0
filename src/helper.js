export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDupes(data);
  }

  removeDupes = data => {
    return data.reduce((accu, school) => {
      if (!accu[school.Location]) {
        accu[school.Location] = [];
      }
      accu[school.Location].push(school);
      return accu;
    }, {});
  };
}
