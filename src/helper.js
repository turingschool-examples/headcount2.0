export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }
}
